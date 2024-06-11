import { Context } from '$lib/utils/context.js';

import type { ListProps, RootProps } from './index.js';

type ListContex = Pick<ListProps, never> & {
  rootContext: RootContext;
};
type RootContext = Pick<RootProps, never>;

export const listContext = new Context<ListContex>();
export const rootContext = new Context<RootContext>();
