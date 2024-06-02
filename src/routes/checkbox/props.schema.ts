import z from 'zod';

export const schema = z.object({
  disabled: z.boolean({
    description: 'When `true`, the checkbox will be disabled.',
  }),
});
