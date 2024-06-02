import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type { RootProps } from './index.js';

export const rootContext = new Context<Writable<Pick<RootProps, 'hoverable'>>>();
