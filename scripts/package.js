#!/usr/bin/env node

/**
 * This script is a modified version of the `package` script from the SvelteKit package.
 *
 * It's purpose is to log emitted diagnostics when generating d.ts files, in order to be able to debug issues with the generated types.
 */

// @ts-check

import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { preprocess } from 'svelte/compiler';
import { svelte2tsx } from 'svelte2tsx';
import ts from 'typescript';

import { load_config as loadConfig } from '../node_modules/@sveltejs/package/src/config.js';
import {
  copy,
  mkdirp,
  posixify,
  rimraf,
  walk,
} from '../node_modules/@sveltejs/package/src/filesystem.js';
import {
  resolve_aliases as resolveAliases,
  scan,
  strip_lang_tags as stripLangTags,
  write,
} from '../node_modules/@sveltejs/package/src/utils.js';
import { create_validator as createValidator } from '../node_modules/@sveltejs/package/src/validate.js';

/**
 * @typedef {Options['config']} Config
 * @typedef {import('svelte/types/compiler/preprocess').PreprocessorGroup} PreprocessorGroup
 * @typedef {import('svelte2tsx').EmitDtsConfig} EmitDtsConfig
 * @typedef {import('../node_modules/@sveltejs/package/src/types.d.ts').File} File
 * @typedef {import('../node_modules/@sveltejs/package/src/types.d.ts').Options} Options
 * @typedef {{
 *  add: (path: string) => boolean;
 *  get: (key: string) => string | undefined;
 * }} SvelteMap
 */

const config = await loadConfig();

await buildPackage({
  cwd: process.cwd(),
  input: config.kit?.files?.lib ?? 'src/lib',
  output: 'dist',
  types: true,
  config,
});

/**
 * Package the project for npm.
 *
 * @param {Options} options
 */
async function buildPackage(options) {
  // Prepare the validator
  const { analyse_code, validate } = createValidator(options);

  await doBuild(options, analyse_code);

  validate();
}
/**
 * Generates a map to which we add the transformed code of Svelte files
 * early on when we first need to look at the file contents and can read
 * those transformed source later on.
 *
 * @param {EmitDtsConfig} config
 */
async function createSvelteMap(config) {
  const svelteFiles = new Map();

  function add(/** @type {string} */ path) {
    const code = /** @type {string} */ (ts.sys.readFile(path, 'utf-8'));
    const isTsFile = /<script\s+[^>]*?lang=('|")(ts|typescript)('|")/.test(code);
    const transformed = svelte2tsx(code, {
      filename: path,
      isTsFile,
      mode: 'dts',
      // @ts-expect-error unknown property
      noSvelteComponentTyped: config.svelteShimsPath
        .replace(/\\/g, '/')
        .endsWith('svelte2tsx/svelte-shims-v4.d.ts'),
    }).code;

    svelteFiles.set(path, transformed);

    return isTsFile;
  }

  return { add, get: (key) => svelteFiles.get(key) };
}
/**
 * @param {import('typescript').CompilerOptions} options
 * @param {SvelteMap} svelteMap
 */
async function createTsCompilerHost(options, svelteMap) {
  const host = ts.createCompilerHost(options);
  // TypeScript writes the files relative to the found tsconfig/jsconfig
  // which - at least in the case of the tests - is wrong. Therefore prefix
  // the output paths. See Typescript issue #25430 for more.
  const pathPrefix = relative(
    process.cwd(),
    dirname(/** @type {string} */ (options.configFilePath)),
  )
    .split(sep)
    .join('/');
  const svelteSys = {
    ...ts.sys,
    fileExists(/** @type {string} */ originalPath) {
      let exists = ts.sys.fileExists(originalPath);

      if (exists) {
        return true;
      }

      const path = ensureRealSvelteFilepath(originalPath);

      if (path === originalPath) {
        return false;
      }

      exists = ts.sys.fileExists(path);

      if (exists && isSvelteFilepath(path)) {
        const isTsFile = svelteMap.add(path);

        if (
          (isTsFile && !isTsFilepath(originalPath)) ||
          (!isTsFile && isTsFilepath(originalPath))
        ) {
          return false;
        }
      }

      return exists;
    },
    readFile(/** @type {string} */ path, encoding = 'utf-8') {
      const sveltePath = ensureRealSvelteFilepath(path);

      if (path !== sveltePath || isSvelteFilepath(path)) {
        const result = svelteMap.get(sveltePath);

        if (result === undefined) {
          return ts.sys.readFile(path, encoding);
        } else {
          return result;
        }
      } else {
        return ts.sys.readFile(path, encoding);
      }
    },
    readDirectory(
      /** @type {string} */ path,
      /** @type {readonly string[] | undefined} */ extensions,
      /** @type {readonly string[] | undefined} */ exclude,
      /** @type {readonly string[] | undefined} */ include,
      /** @type {number | undefined} */ depth,
    ) {
      const extensionsWithSvelte = (extensions || []).concat('.svelte');

      return ts.sys.readDirectory(path, extensionsWithSvelte, exclude, include, depth);
    },
    writeFile(fileName, data, writeByteOrderMark) {
      fileName = pathPrefix ? join(pathPrefix, fileName) : fileName;

      if (fileName.endsWith('d.ts.map')) {
        data = data.replace(/"sources":\["(.+?)"\]/, (_, sourcePath) => {
          // Due to our hack of treating .svelte files as .ts files, we need to adjust the extension
          if (sourcePath.endsWith('.svelte.ts')) {
            sourcePath = sourcePath.slice(0, -3);
          }

          // The inverse of the pathPrefix adjustment
          sourcePath =
            pathPrefix && sourcePath.includes(pathPrefix)
              ? sourcePath.slice(0, sourcePath.indexOf(pathPrefix)) +
                sourcePath.slice(sourcePath.indexOf(pathPrefix) + pathPrefix.length + 1)
              : sourcePath;

          return `"sources":["${sourcePath}"]`;
        });
      } else if (fileName.endsWith('js.map')) {
        data = data.replace(/"sources":\["(.+?)"\]/, (_, sourcePath) => {
          // The inverse of the pathPrefix adjustment
          sourcePath =
            pathPrefix && sourcePath.includes(pathPrefix)
              ? sourcePath.slice(0, sourcePath.indexOf(pathPrefix)) +
                sourcePath.slice(sourcePath.indexOf(pathPrefix) + pathPrefix.length + 1)
              : sourcePath;

          return `"sources":["${sourcePath}"]`;
        });
      }

      return ts.sys.writeFile(fileName, data, writeByteOrderMark);
    },
  };

  host.fileExists = svelteSys.fileExists;
  host.readFile = svelteSys.readFile;
  host.readDirectory = svelteSys.readDirectory;
  host.writeFile = svelteSys.writeFile;
  host.resolveModuleNames = (
    moduleNames,
    containingFile,
    _reusedNames,
    _redirectedReference,
    compilerOptions,
  ) => {
    return moduleNames.map((moduleName) => {
      return resolveModuleName(moduleName, containingFile, compilerOptions);
    });
  };
  host.resolveModuleNameLiterals = (
    moduleLiterals,
    containingFile,
    _redirectedReference,
    compilerOptions,
  ) => {
    return moduleLiterals.map((moduleLiteral) => {
      return {
        resolvedModule: resolveModuleName(moduleLiteral.text, containingFile, compilerOptions),
      };
    });
  };

  function resolveModuleName(name, containingFile, compilerOptions) {
    // Delegate to the TS resolver first.
    // If that does not bring up anything, try the Svelte Module loader
    // which is able to deal with .svelte files.
    const tsResolvedModule = ts.resolveModuleName(
      name,
      containingFile,
      compilerOptions,
      ts.sys,
    ).resolvedModule;
    if (tsResolvedModule && !isVirtualSvelteFilepath(tsResolvedModule.resolvedFileName)) {
      return tsResolvedModule;
    }
    return ts.resolveModuleName(name, containingFile, compilerOptions, svelteSys).resolvedModule;
  }

  return host;
}
/**
 * Perform the build.
 *
 * @param {Options} options
 * @param {(name: string, content: string) => void} analyse_code
 */
async function doBuild(options, analyse_code) {
  const { input, output, temp, extensions, alias, tsconfig } = normalizeOptions(options);

  if (!existsSync(input)) {
    throw new Error(`${relative('.', input)} does not exist`);
  }

  rimraf(temp);
  mkdirp(temp);

  const files = scan(input, extensions);

  if (options.types) {
    await emit_dts(input, temp, options.cwd, alias, files);
  }

  for (const file of files) {
    await process_file(input, temp, file, options.config.preprocess, alias, tsconfig, analyse_code);
  }

  rimraf(output);
  mkdirp(output);
  copy(temp, output);
}
/**
 * Generates d.ts files by invoking TypeScript's "emit d.ts files from input files".
 * The files are written to a temporary location and those which should be kept
 * are sanitized ($lib alias resolved) and copied over to the destination folder.
 *
 * @param {string} input
 * @param {string} output
 * @param {string} cwd
 * @param {Record<string, string>} alias
 * @param {File[]} files
 */
async function emit_dts(input, output, cwd, alias, files) {
  const tmp = `${output}/__package_types_tmp__`;

  rimraf(tmp);
  mkdirp(tmp);

  const require = createRequire(import.meta.url);

  await emitDts({
    libRoot: input,
    svelteShimsPath: require.resolve('svelte2tsx/svelte-shims-v4.d.ts'),
    declarationDir: relative(cwd, tmp),
  });

  const handwritten = new Set();

  // skip files that conflict with hand-written .d.ts
  for (const file of files) {
    if (file.name.endsWith('.d.ts')) {
      handwritten.add(file.name);
    }
  }

  // resolve $lib alias (TODO others), copy into package dir
  for (const file of walk(tmp)) {
    const normalized = posixify(file);

    if (handwritten.has(normalized)) {
      console.warn(`Using $lib/${normalized} instead of generated .d.ts file`);
    }

    const source = readFileSync(join(tmp, normalized), 'utf8');

    write(join(output, normalized), resolveAliases(input, normalized, source, alias));
  }

  rimraf(tmp);
}
/**
 * Searches for a jsconfig or tsconfig starting at `root` and emits d.ts files
 * into `declarationDir` using the ambient file from `svelteShimsPath`.
 * Note: Handwritten `d.ts` files are not copied over; TypeScript does not
 * touch these files.
 *
 * @param {EmitDtsConfig} config
 */
async function emitDts(config) {
  const svelteMap = await createSvelteMap(config);
  const { options, filenames } = loadTsconfig(config, svelteMap);
  const host = await createTsCompilerHost(options, svelteMap);
  const program = ts.createProgram(filenames, options, host);
  const result = program.emit();

  if (result.emitSkipped) {
    console.error('Failed to generate d.ts files');

    await saveEmitResult(result);

    process.exit(1);
  }

  console.info('Generated d.ts files successfully.');
}
/**
 * @param {string} filePath
 */
function ensureRealSvelteFilepath(filePath) {
  return isVirtualSvelteFilepath(filePath) ? toRealSvelteFilepath(filePath) : filePath;
}
/**
 * @param {string} maybeParent
 * @param {string} maybeChild
 */
function isSubpath(maybeParent, maybeChild) {
  const r = relative(maybeParent, maybeChild);

  return r && !r.startsWith('..') && !isAbsolute(r);
}
/**
 * @param {string} filePath
 */
function isSvelteFilepath(filePath) {
  return filePath.endsWith('.svelte');
}
/**
 * @param {string} filePath
 */
function isTsFilepath(filePath) {
  return filePath.endsWith('.ts');
}
/**
 * @param {string} filePath
 */
function isVirtualSvelteFilepath(filePath) {
  return filePath.endsWith('.svelte.ts') || filePath.endsWith('svelte.js');
}
/**
 * @param {string | undefined} tsconfig
 * @param {string} filename
 * @param {import('typescript')} ts
 */
function load_tsconfig(tsconfig, filename, ts) {
  let config_filename;

  if (tsconfig) {
    if (existsSync(tsconfig)) {
      config_filename = tsconfig;
    } else {
      throw new Error('Failed to locate provided tsconfig or jsconfig');
    }
  } else {
    // ts.findConfigFile is broken (it will favour a distant tsconfig
    // over a near jsconfig, and then only when you call it twice)
    // so we implement it ourselves
    let dir = filename;

    while (dir !== (dir = dirname(dir))) {
      const tsconfig = join(dir, 'tsconfig.json');
      const jsconfig = join(dir, 'jsconfig.json');

      if (existsSync(tsconfig)) {
        config_filename = tsconfig;

        break;
      }

      if (existsSync(jsconfig)) {
        config_filename = jsconfig;

        break;
      }
    }
  }

  if (!config_filename) {
    throw new Error('Failed to locate tsconfig or jsconfig');
  }

  const { error, config } = ts.readConfigFile(config_filename, ts.sys.readFile);

  if (error) {
    throw new Error('Malformed tsconfig\n' + JSON.stringify(error, null, 2));
  }

  // Do this so TS will not search for initial files which might take a while
  config.include = [];
  config.files = [];

  const { options } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    dirname(config_filename),
    { sourceMap: false },
    config_filename,
  );

  return options;
}
/**
 * @param {EmitDtsConfig} config
 * @param {SvelteMap} svelteMap
 */
function loadTsconfig(config, svelteMap) {
  const libRoot = config.libRoot || process.cwd();
  const jsconfigFile = ts.findConfigFile(libRoot, ts.sys.fileExists, 'jsconfig.json');

  let tsconfigFile = ts.findConfigFile(libRoot, ts.sys.fileExists);

  if (!tsconfigFile && !jsconfigFile) {
    throw new Error('Failed to locate tsconfig or jsconfig');
  }

  tsconfigFile = /** @type {string} */ (tsconfigFile || jsconfigFile);

  if (jsconfigFile && isSubpath(dirname(tsconfigFile), dirname(jsconfigFile))) {
    tsconfigFile = jsconfigFile;
  }

  tsconfigFile = isAbsolute(tsconfigFile) ? tsconfigFile : join(libRoot, tsconfigFile);

  const basepath = dirname(tsconfigFile);
  const { error, config: tsConfig } = ts.readConfigFile(tsconfigFile, ts.sys.readFile);

  if (error) {
    throw new Error('Malformed tsconfig\n' + JSON.stringify(error, null, 2));
  }

  // Rewire includes and files. This ensures that only the files inside the lib are traversed and
  // that the outputted types have the correct directory depth.
  // This is a little brittle because we then may include more than the user wants
  const libPathRelative = relative(basepath, libRoot).split(sep).join('/');

  if (libPathRelative) {
    tsConfig.include = [`${libPathRelative}/**/*`];
    tsConfig.files = [];
  }

  const { options, fileNames } = ts.parseJsonConfigFileContent(
    tsConfig,
    ts.sys,
    basepath,
    { sourceMap: false, rootDir: config.libRoot },
    tsconfigFile,
    undefined,
    [{ extension: 'svelte', isMixedContent: true, scriptKind: ts.ScriptKind.Deferred }],
  );
  const filenames = fileNames.map((name) => {
    if (!isSvelteFilepath(name)) {
      return name;
    }

    // We need to trick TypeScript into thinking that Svelte files
    // are either TS or JS files in order to generate correct d.ts
    // definition files.
    const isTsFile = svelteMap.add(name);

    return name + (isTsFile ? '.ts' : '.js');
  });

  // Add ambient functions so TS knows how to resolve its invocations in the
  // code output of svelte2tsx.
  filenames.push(config.svelteShimsPath);

  return {
    options: {
      ...options,
      noEmit: false, // Set to true in case of jsconfig, force false, else nothing is emitted
      moduleResolution:
        // NodeJS: up to 4.9, Node10: since 5.0
        ts.ModuleResolutionKind.NodeJs ?? ts.ModuleResolutionKind.Node10, // Classic if not set, which gives wrong results
      declaration: true, // Needed for d.ts file generation
      emitDeclarationOnly: true, // We only want d.ts file generation
      declarationDir: config.declarationDir, // Where to put the declarations
      allowNonTsExtensions: true,
    },
    filenames,
  };
}
/**
 * Normalize the options.
 *
 * @param {Options} options The options to normalize.
 * @returns The normalized options.
 */
function normalizeOptions(options) {
  const input = resolve(options.cwd, options.input);
  const output = resolve(options.cwd, options.output);
  const temp = resolve(options.cwd, options.config.kit?.outDir ?? '.svelte-kit', '__package__');
  const extensions = options.config.extensions ?? ['.svelte'];
  const tsconfig = options.tsconfig ? resolve(options.cwd, options.tsconfig) : undefined;
  const alias = {
    $lib: resolve(options.cwd, options.config.kit?.files?.lib ?? 'src/lib'),
    ...(options.config.kit?.alias ?? {}),
  };

  return {
    input,
    output,
    temp,
    extensions,
    alias,
    tsconfig,
  };
}
/**
 * @param {string} input
 * @param {string} output
 * @param {File} file
 * @param {PreprocessorGroup | undefined} preprocessor
 * @param {Record<string, string>} aliases
 * @param {string | undefined} tsconfig
 * @param {(name: string, code: string) => void} analyse_code
 */
async function process_file(input, output, file, preprocessor, aliases, tsconfig, analyse_code) {
  const filename = join(input, file.name);
  const dest = join(output, file.dest);

  if (file.is_svelte || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
    let contents = readFileSync(filename, 'utf-8');

    if (file.is_svelte) {
      if (preprocessor) {
        const preprocessed = (await preprocess(contents, preprocessor, { filename })).code;

        contents = stripLangTags(preprocessed);
      }
    }

    if (file.name.endsWith('.ts') && !file.name.endsWith('.d.ts')) {
      contents = await transpile_ts(tsconfig, filename, contents);
    }

    contents = resolveAliases(input, file.name, contents, aliases);

    analyse_code(file.name, contents);
    write(dest, contents);
  } else {
    copy(filename, dest);
  }
}
/**
 * Save the emit result.
 *
 * @param {import('typescript').EmitResult} result
 */
async function saveEmitResult(result) {
  for (const diagnostic of result.diagnostics) {
    if (!diagnostic.file) {
      continue;
    }

    console.error(
      `File "${diagnostic.file.fileName}" had the following issue:\n`,
      diagnostic.messageText,
      '\n',
      diagnostic.file.text,
      '\n',
    );
  }
}
/**
 * @param {string} filePath
 */
function toRealSvelteFilepath(filePath) {
  return filePath.slice(0, -3); // -'.js'.length || -'.ts'.length
}
/**
 * TS -> JS
 *
 * @param {string | undefined} tsconfig
 * @param {string} filename
 * @param {string} source
 */
async function transpile_ts(tsconfig, filename, source) {
  const options = load_tsconfig(tsconfig, filename, ts);
  // transpileModule treats NodeNext as CommonJS because it doesn't read the package.json. Therefore we need to override it.
  // Also see https://github.com/microsoft/TypeScript/issues/53022 (the filename workaround doesn't work).
  return ts.transpileModule(source, {
    compilerOptions: {
      ...options,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
    },
    fileName: filename,
  }).outputText;
}
