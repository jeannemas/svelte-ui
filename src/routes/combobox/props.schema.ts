import z from 'zod';

export const schema = z.object({
  disabled: z.boolean({
    description:
      'Whether the combobox is disabled which prevents it from being opened and interacted with.',
  }),
});
