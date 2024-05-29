import z from 'zod';

import { buttonStyles, type Size, type Variant } from '$lib/components/button/index.js';

export const schema = z.object({
  disabled: z.boolean().default(false).describe('Whether the button is disabled.'),
  size: z
    .enum(Object.keys(buttonStyles.variants.size) as [Size, ...Size[]])
    .default(buttonStyles.defaultVariants.size!)
    .optional()
    .describe('The size of the button.'),
  variant: z
    .enum(Object.keys(buttonStyles.variants.variant) as [Variant, ...Variant[]])
    .default(buttonStyles.defaultVariants.variant!)
    .optional()
    .describe('The variant of the button.'),
});
