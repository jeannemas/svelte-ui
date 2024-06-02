import z from 'zod';

export const schema = z.object({
  disabled: z.boolean({
    description: 'When `true`, prevents the user from interacting with the accordion.',
  }),
});
