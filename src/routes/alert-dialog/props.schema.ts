import z from 'zod';

import {
  rootStyles,
  type RootBreakpoint,
  type RootVariant,
} from '$lib/components/alert-dialog/index.js';

export const schema = z.object({
  breakpoint: z
    .enum(Object.keys(rootStyles.variants.breakpoint) as [RootBreakpoint, ...RootBreakpoint[]])
    .default(rootStyles.defaultVariants.breakpoint!)
    .optional()
    .describe('The breakpoint of the alert dialog.'),
  closeOnEscape: z
    .boolean()
    .default(true)
    .describe('Whether or not to close the alert dialog when the escape key is pressed.'),
  closeOnOutsideClick: z
    .boolean()
    .default(false)
    .describe('Whether or not to close the alert dialog when clicking outside of it.'),
  preventScroll: z
    .boolean()
    .default(true)
    .describe('Whether or not to prevent scrolling when the alert dialog is open.'),
  variant: z
    .enum(Object.keys(rootStyles.variants.variant) as [RootVariant, ...RootVariant[]])
    .default(rootStyles.defaultVariants.variant!)
    .optional()
    .describe('The variant of the alert dialog.'),
});
