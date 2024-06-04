import z from 'zod';

import * as Breadcrumb from '$lib/components/breadcrumb/index.js';

const breakpoints = Object.keys(Breadcrumb.rootStyles.variants.breakpoint) as [
  Breadcrumb.Breakpoint,
  ...Breadcrumb.Breakpoint[],
];

export const schema = z.object({
  breakpoint: z.enum(breakpoints, {
    description: 'The breakpoint of the breadcrumb.',
  }),
});
