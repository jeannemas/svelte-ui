import z from 'zod';

export const schema = z.object({
  required: z.boolean({
    description: 'When `true`, the checkbox will be required.',
  }),
});
