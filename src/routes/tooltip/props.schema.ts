import z from 'zod';

export const schema = z.object({
  closeDelay: z
    .number({
      description: 'The tooltip close delay (in ms).',
    })
    .min(0),
  closeOnEscape: z.boolean({
    description: 'Whether to close the tooltip on escape.',
  }),
  closeOnPointerDown: z.boolean({
    description: 'Whether to close the tooltip on pointer down.',
  }),
  disableHoverableContent: z.boolean({
    description: 'Whether to disbale the hoverable content.',
  }),
  openDelay: z
    .number({
      description: 'The tooltip open delay (in ms).',
    })
    .min(0),
});
