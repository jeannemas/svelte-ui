import { parseFiles } from '@structured-types/api';
import { resolve } from 'node:path';
import { inspect } from 'node:util';

const docs = parseFiles([
  resolve(import.meta.dirname, '../src/lib/components/accordion/AccordionRoot.svelte'),
  resolve(import.meta.dirname, '../src/lib/utils/types.ts'),
]);

console.log(inspect(docs, { depth: null }));
