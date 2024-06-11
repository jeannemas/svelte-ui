import { Context } from '$lib/utils/context.js';

import type { HeaderProps, RootProps } from './index.js';

type HeaderContext = Pick<HeaderProps, never> & {
  rootContext: RootContext;
};
type RootContext = Pick<RootProps, 'variant'>;

export const headerContext = new Context<HeaderContext>();
export const rootContext = new Context<RootContext>();
