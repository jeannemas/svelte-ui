import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { ItemProps, ListProps, RootProps } from './index.js';

type ItemContext = ListContext & {
  [K in keyof Pick<ItemProps, never> as `item${Capitalize<K>}`]: ItemProps[K];
};
type ListContext = RootContext & {
  [K in keyof Pick<ListProps, never> as `list${Capitalize<K>}`]: ListProps[K];
};
type RootContext = {
  [K in keyof Pick<RootProps, 'breakpoint'> as `root${Capitalize<K>}`]: RootProps[K];
};

export const itemContext = new Context<Writable<ItemContext>>();
export const listContext = new Context<Writable<ListContext>>();
export const rootContext = new Context<Writable<RootContext>>();
