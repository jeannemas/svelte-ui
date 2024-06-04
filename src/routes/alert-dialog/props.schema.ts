import z from 'zod';

import * as AlertDialog from '$lib/components/alert-dialog/index.js';

const breakpoints = Object.keys(AlertDialog.rootStyles.variants.breakpoint) as [
  AlertDialog.Breakpoint,
  ...AlertDialog.Breakpoint[],
];
const variants = Object.keys(AlertDialog.rootStyles.variants.variant) as [
  AlertDialog.Variant,
  ...AlertDialog.Variant[],
];

export const schema = z.object({
  breakpoint: z.enum(breakpoints, {
    description: 'The breakpoint of the alert dialog.',
  }),
  closeOnEscape: z.boolean({
    description: 'Whether or not to close the alert dialog when the escape key is pressed.',
  }),
  closeOnOutsideClick: z.boolean({
    description: 'Whether or not to close the alert dialog when clicking outside of it.',
  }),
  preventScroll: z.boolean({
    description: 'Whether or not to prevent scrolling when the alert dialog is open.',
  }),
  variant: z.enum(variants, {
    description: 'The variant of the alert dialog.',
  }),
});
