import z from 'zod';

import { buttonStyles, type Size, type Variant } from '$lib/components/button/index.js';

const sizes = Object.keys(buttonStyles.variants.size) as [Size, ...Size[]];
const variants = Object.keys(buttonStyles.variants.variant) as [Variant, ...Variant[]];

export const schema = z.object({
  disabled: z.boolean({
    description: 'Whether the button is disabled.',
  }),
  size: z.enum(sizes, {
    description: 'The size of the button.',
  }),
  variant: z.enum(variants, {
    description: 'The variant of the button.',
  }),
});
