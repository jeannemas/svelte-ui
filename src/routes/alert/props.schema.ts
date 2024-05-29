import z from 'zod';

import { rootStyles, type RootVariant } from '$lib/components/alert/index.js';

export const schema = z.object({
  variant: z
    .enum(Object.keys(rootStyles.variants.variant) as [RootVariant, ...RootVariant[]])
    .default(rootStyles.defaultVariants.variant!)
    .optional()
    .describe('The variant of the alert.'),
});
