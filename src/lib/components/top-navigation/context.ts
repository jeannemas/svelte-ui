import { Context } from '$lib/utils/context.js';

import type { RootProps } from './index.js';

type RootContext = Pick<RootProps, 'breakpoint'>;

export const rootContext = new Context<RootContext>();
