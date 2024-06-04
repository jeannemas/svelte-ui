import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { HeaderProps, RootProps } from './index.js';

type HeaderContext = RootContext & Pick<HeaderProps, never>;
type RootContext = Pick<RootProps, 'variant'>;

export const headerContext = new Context<Writable<HeaderContext>>();
export const rootContext = new Context<Writable<RootContext>>();
