import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { ContentProps, PortalProps, RootProps } from './index.js';

type ContentContext = PortalContext & {
  [K in keyof Pick<ContentProps, never> as `content${Capitalize<K>}`]: ContentProps[K];
};
type PortalContext = RootContext & {
  [K in keyof Pick<PortalProps, never> as `portal${Capitalize<K>}`]: PortalProps[K];
};
type RootContext = {
  [K in keyof Pick<RootProps, 'breakpoint' | 'variant'> as `root${Capitalize<K>}`]: RootProps[K];
};

export const contentContext = new Context<Writable<ContentContext>>();
export const portalContext = new Context<Writable<PortalContext>>();
export const rootContext = new Context<Writable<RootContext>>();
