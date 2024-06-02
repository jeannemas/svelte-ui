import z from 'zod';

export const schema = z.object({
  loop: z.boolean({
    description:
      'Optionally set to `true` to enable looping through the items when the user reaches the end of the list using the keyboard.',
  }),
});
