import z from 'zod';

export const schema = z.object({
  debug: z.boolean({
    description: 'Whether to display the form state in a debug panel underneath the form.',
  }),
});
