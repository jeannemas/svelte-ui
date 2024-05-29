import z from 'zod';

export const schema = z.object({
  disabled: z.boolean().default(false).describe('When `true`, the checkbox will be disabled.'),
});
