import z from 'zod';

import { rootStyles } from '$lib/components/accordion/index.js';

export const schema = z.object({
  disabled: z
    .boolean()
    .default(rootStyles.defaultVariants.disabled!)
    .describe('When `true`, prevents the user from interacting with the accordion.'),
});
