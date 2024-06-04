import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { ItemProps, ListProps, RootProps } from './index.js';

export const itemContext = new Context<Writable<Pick<ItemProps, never>>>();
export const listContext = new Context<Writable<Pick<ListProps, never>>>();
export const rootContext = new Context<Writable<Pick<RootProps, 'breakpoint'>>>();
