import z from 'zod';

import { rootStyles, type Breakpoint } from '$lib/components/top-navigation/index.js';

const breakpoints = Object.keys(rootStyles.variants.breakpoint) as [Breakpoint, ...Breakpoint[]];

export const schema = z.object({
  breakpoint: z.enum(breakpoints, {
    description: 'The breakpoint of the navigation.',
  }),
});
