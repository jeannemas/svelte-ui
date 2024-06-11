import { Context } from '$lib/utils/context.js';

import type { ContentProps, PortalProps, RootProps } from './index.js';

type ContentContext = Pick<ContentProps, never> & {
  portalContext: PortalContext;
};

type PortalContext = Pick<PortalProps, never> & {
  rootContext: RootContext;
};

type RootContext = Pick<RootProps, 'breakpoint' | 'variant'>;

export const contentContext = new Context<ContentContext>();
export const portalContext = new Context<PortalContext>();
export const rootContext = new Context<RootContext>();
