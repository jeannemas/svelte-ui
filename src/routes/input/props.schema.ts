import z from 'zod';

import { variants } from '$lib/components/input/index.js';

export const schema = z.object({
  disabled: z.boolean({
    description: 'Whether the input is disabled.',
  }),
  placeholder: z
    .string({
      description: 'The input placeholder.',
    })
    .optional(),
  variant: z.enum(variants, {
    description: 'The variant of the input.',
  }),
});
