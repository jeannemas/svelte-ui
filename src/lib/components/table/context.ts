import { Context } from '$lib/utils/context.js';

import type { RootProps } from './index.js';

type RootContext = Pick<RootProps, 'hoverable'>;

export const rootContext = new Context<RootContext>();
