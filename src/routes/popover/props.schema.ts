import z from 'zod';

export const schema = z.object({
  closeOnEscape: z.boolean({
    description: 'Whether or not to close the popover when the escape key is pressed.',
  }),
  closeOnOutsideClick: z.boolean({
    description: 'Whether or not to close the popover on outside click.',
  }),
  disableFocusTrap: z.boolean({
    description: 'Whether or not to disable the focus trap when the popover is open.',
  }),
  preventScroll: z.boolean({
    description: 'Whether or not to prevent scrolling when the popover is open.',
  }),
});
