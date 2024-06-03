import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { ContentProps, PortalProps, RootProps } from './index.js';

export const contentContext = new Context<Writable<Pick<ContentProps, never>>>();
export const portalContext = new Context<Writable<Pick<PortalProps, never>>>();
export const rootContext = new Context<Writable<Pick<RootProps, 'breakpoint' | 'variant'>>>();
