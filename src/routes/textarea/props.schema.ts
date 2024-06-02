import z from 'zod';

export const schema = z.object({
  disabled: z
    .boolean({
      description: 'Whether the textarea is disabled.',
    })
    .default(false),
  placeholder: z.string({
    description: 'The textarea placeholder.',
  }),
  readonly: z.boolean({
    description: 'Whether the textarea is read-only.',
  }),
});
