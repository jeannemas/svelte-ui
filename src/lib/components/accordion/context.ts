import { Context } from '$lib/utils/context.js';

import type { HeaderProps, ItemProps, RootProps } from './index.js';

type HeaderContext = Pick<HeaderProps, never> & {
  itemContext: ItemContext;
};
type ItemContext = Pick<ItemProps, 'disabled'> & {
  rootContext: RootContext;
};
type RootContext = Pick<RootProps<boolean>, 'disabled'>;

export const headerContext = new Context<HeaderContext>();
export const itemContext = new Context<ItemContext>();
export const rootContext = new Context<RootContext>();
