import z from 'zod';

import { rootStyles, type RootVariant } from '$lib/components/alert/index.js';

const variants = Object.keys(rootStyles.variants.variant) as [RootVariant, ...RootVariant[]];

export const schema = z.object({
  variant: z.enum(variants, {
    description: 'The variant of the alert.',
  }),
});
