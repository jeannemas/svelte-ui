import z from 'zod';

export const schema = z.object({
  hoverable: z.boolean({
    description: 'Whether or not the rows should be hoverable.',
  }),
});
