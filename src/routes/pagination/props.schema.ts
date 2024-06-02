import z from 'zod';

export const schema = z.object({
  count: z
    .number({
      description: 'The total number of items to be paginated.',
    })
    .int()
    .min(0),
  perPage: z
    .number({
      description: 'Number of items per page.',
    })
    .int()
    .min(1),
  siblingCount: z
    .number({
      description: 'Number of visible items before and after the current page.',
    })
    .int()
    .min(1),
});
