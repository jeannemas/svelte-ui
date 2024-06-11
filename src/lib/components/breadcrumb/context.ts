import { Context } from '$lib/utils/context.js';

import type { ItemProps, ListProps, RootProps } from './index.js';

type ItemContext = Pick<ItemProps, never> & {
  listContext: ListContext;
};
type ListContext = Pick<ListProps, never> & {
  rootContext: RootContext;
};
type RootContext = Pick<RootProps, 'breakpoint'>;

export const itemContext = new Context<ItemContext>();
export const listContext = new Context<ListContext>();
export const rootContext = new Context<RootContext>();
