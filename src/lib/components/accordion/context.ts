import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { HeaderProps, ItemProps, RootProps } from './index.js';

type HeaderContext = ItemContext & {
  [K in keyof Pick<HeaderProps, never> as `header${Capitalize<K>}`]: HeaderProps[K];
};
type ItemContext = RootContext & {
  [K in keyof Pick<ItemProps, 'disabled'> as `item${Capitalize<K>}`]: ItemProps[K];
};
type RootContext = {
  [K in keyof Pick<
    RootProps<boolean>,
    'disabled'
  > as `root${Capitalize<K>}`]: RootProps<boolean>[K];
};

export const headerContext = new Context<Writable<HeaderContext>>();
export const itemContext = new Context<Writable<ItemContext>>();
export const rootContext = new Context<Writable<RootContext>>();
