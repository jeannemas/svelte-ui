import z from 'zod';

import { rootStyles, type RootBreakpoint } from '$lib/components/breadcrumb/index.js';

export const schema = z.object({
  breakpoint: z
    .enum(Object.keys(rootStyles.variants.breakpoint) as [RootBreakpoint, ...RootBreakpoint[]])
    .default(rootStyles.defaultVariants.breakpoint!)
    .optional()
    .describe('The breakpoint of the breadcrumb.'),
});
