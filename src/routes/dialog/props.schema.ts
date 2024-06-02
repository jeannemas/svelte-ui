import z from 'zod';

export const schema = z.object({
  closeOnEscape: z.boolean({
    description: 'If `true`, the dialog will close when the user presses the escape key.',
  }),
  closeOnOutsideClick: z.boolean({
    description: 'If `true`, the dialog will close when the user clicks outside of it.',
  }),
  preventScroll: z.boolean({
    description: 'If `true`, the dialog will prevent scrolling on the body when it is open.',
  }),
});
