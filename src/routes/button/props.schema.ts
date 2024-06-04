import z from 'zod';

import * as Button from '$lib/components/button/index.js';

const sizes = Object.keys(Button.rootStyles.variants.size) as [Button.Size, ...Button.Size[]];
const variants = Object.keys(Button.rootStyles.variants.variant) as [
  Button.Variant,
  ...Button.Variant[],
];

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
