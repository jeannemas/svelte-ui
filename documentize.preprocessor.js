// @ts-check

/// <reference lib="esnext" />

import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

/**
 * Documentize Svelte components by inserting markdown content from adjacent files.
 *
 * @returns {import('svelte/compiler').PreprocessorGroup}
 */
export default function documentize() {
  return {
    name: 'documentize-preprocessor',
    async markup(context) {
      const { content, filename = '' } = context;

      if (!filename.endsWith('.svelte')) {
        return;
      }

      const newCode = await resolveMarkdownDoc(filename, content);

      return {
        code: newCode,
      };
    },
  };
}

/**
 * Process the component and its markup.
 *
 * @param {string} filename
 * @param {string} markup
 */
async function resolveMarkdownDoc(filename, markup) {
  const documentizeIdentifier = /<!-- @component -->/g;

  if (!documentizeIdentifier.test(markup)) {
    return markup;
  }

  const markdownFilename = filename.replace(/\.svelte$/, '.md');
  const markdownExists = await stat(markdownFilename)
    .then((stats) => stats.isFile())
    .catch(() => false);

  if (!markdownExists) {
    console.error(`File '${filename}' is missing its documentation file at '${markdownFilename}'.`);

    return markup;
  }

  const markdownContent = await readFile(markdownFilename, {
    encoding: 'utf-8',
  });
  const processedMarkdown = await resolveIncludes(markdownFilename, markdownContent);
  const newMarkup = markup.replaceAll(
    documentizeIdentifier,
    `<!--\n@component\n\n${processedMarkdown}\n-->`,
  );

  return newMarkup;
}

/**
 * Process the includes in the file.
 *
 * @param {string} filename
 * @param {string} markup
 */
async function resolveIncludes(filename, markup) {
  const matches = markup.matchAll(/<!-- @include\((?<file>[0-9a-zA-Z/._-]+)\) -->/g);

  for (const match of matches) {
    const includeFilename = match.groups?.file;

    if (!includeFilename) {
      continue;
    }

    const filePath = resolve(dirname(filename), includeFilename);
    const exists = await stat(filePath)
      .then((stats) => stats.isFile())
      .catch(() => false);

    if (!exists) {
      console.error(`File '${filename}' is missing its include file at '${filePath}'.`);

      continue;
    }

    const includeContent = await readFile(filePath, {
      encoding: 'utf-8',
    });
    const patchedContent = await resolveIncludes(filePath, includeContent.trim());

    markup = markup.replaceAll(`<!-- @include(${includeFilename}) -->`, patchedContent);
  }

  return markup;
}
