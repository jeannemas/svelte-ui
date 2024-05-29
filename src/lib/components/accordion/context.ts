import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { ItemProps, RootProps } from './index.js';

export const itemContext = new Context<Writable<Pick<ItemProps, 'disabled'>>>();
export const rootContext = new Context<Writable<Pick<RootProps<boolean>, 'disabled'>>>();
