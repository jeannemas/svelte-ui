import z from 'zod';

export const schema = z.object({
  disabled: z
    .boolean()
    .default(false)
    .describe('Whether the collapsible is disabled which prevents it from being opened.'),
});
