import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { HeaderProps, RootProps } from './index.js';

type HeaderContext = RootContext & {
  [K in keyof Pick<HeaderProps, never> as `header${Capitalize<K>}`]: HeaderProps[K];
};
type RootContext = {
  [K in keyof Pick<RootProps, 'variant'> as `root${Capitalize<K>}`]: RootProps[K];
};

export const headerContext = new Context<Writable<HeaderContext>>();
export const rootContext = new Context<Writable<RootContext>>();
