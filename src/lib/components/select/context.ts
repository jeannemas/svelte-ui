import { Context } from '$lib/utils/context.js';

import type { RootProps } from './index.js';

type RootContext = Pick<RootProps<unknown, boolean>, 'items'>;

export const rootContext = new Context<RootContext>();
