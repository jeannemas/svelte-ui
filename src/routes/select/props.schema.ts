import z from 'zod';

export const schema = z.object({
  closeOnEscape: z.boolean({
    description: 'Whether or not to close the listbox menu when the user presses the escape key.',
  }),
  closeOnOutsideClick: z.boolean({
    description:
      'Whether or not to close the listbox menu when the user clicks outside of the listbox.',
  }),
  disabled: z.boolean({
    description: 'Whether the select is disabled.',
  }),
  loop: z.boolean({
    description:
      'Whether or not the listbox should loop through the list when the end or beginning is reached.',
  }),
  preventScroll: z.boolean({
    description: 'Whether or not to prevent scrolling the page when the listbox menu is open.',
  }),
});
