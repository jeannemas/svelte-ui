import z from 'zod';

import * as Card from '$lib/components/card/index.js';

const variants = Object.keys(Card.rootStyles.variants.variant) as [Card.Variant, ...Card.Variant[]];

export const schema = z.object({
  variant: z.enum(variants, {
    description: 'The variant of the card.',
  }),
});
