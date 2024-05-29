import { Context } from '$lib/utils/context.js';

import type { Breakpoint } from './index.js';

export const ctx = new Context<{
  breakpoint?: Breakpoint;
}>();
