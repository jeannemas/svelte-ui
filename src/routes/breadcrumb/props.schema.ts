import z from 'zod';

import { rootStyles, type RootBreakpoint } from '$lib/components/breadcrumb/index.js';

const breakpoints = Object.keys(rootStyles.variants.breakpoint) as [
  RootBreakpoint,
  ...RootBreakpoint[],
];

export const schema = z.object({
  breakpoint: z.enum(breakpoints, {
    description: 'The breakpoint of the breadcrumb.',
  }),
});
