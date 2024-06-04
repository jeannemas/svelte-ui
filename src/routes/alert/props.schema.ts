import z from 'zod';

import * as Alert from '$lib/components/alert/index.js';

const variants = Object.keys(Alert.rootStyles.variants.variant) as [
  Alert.Variant,
  ...Alert.Variant[],
];

export const schema = z.object({
  variant: z.enum(variants, {
    description: 'The variant of the alert.',
  }),
});
