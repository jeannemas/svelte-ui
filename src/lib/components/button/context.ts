import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { RootProps } from './index.js';

type RootContext = {
  [K in keyof Pick<RootProps, 'size' | 'variant'> as `root${Capitalize<K>}`]: RootProps[K];
};

export const rootContext = new Context<Writable<RootContext>>();
