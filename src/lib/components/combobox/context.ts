import { Context } from '$lib/utils/context.js';

import type { ContentProps, GroupProps, ItemProps, RootProps } from './index.js';

type ContentContext = Pick<ContentProps, never> & {
  rootContext: RootContext;
};
type GroupContext = Pick<GroupProps, never> & {
  contentContext: ContentContext;
};
type ItemContex = Pick<ItemProps, never> & {
  contentContext: ContentContext;
};
type RootContext = Pick<RootProps<unknown, boolean>, never>;

export const contentContext = new Context<ContentContext>();
export const groupContext = new Context<GroupContext>();
export const itemContext = new Context<ItemContex>();
export const rootContext = new Context<RootContext>();
