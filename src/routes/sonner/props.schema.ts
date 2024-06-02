import z from 'zod';

import { sonnerStyles, type Dir, type Position, type Theme } from '$lib/components/sonner/index.js';

const dirs = Object.keys(sonnerStyles.variants.dir) as [Dir, ...Dir[]];
const positions = Object.keys(sonnerStyles.variants.position) as [Position, ...Position[]];
const themes = Object.keys(sonnerStyles.variants.theme) as [Theme, ...Theme[]];

export const schema = z.object({
  closeButton: z.boolean({
    description: 'Adds a close button to all toasts, shows on hover.',
  }),
  dir: z.enum(dirs, {
    description: "Directionality of toast's text.",
  }),
  duration: z
    .number({
      description: 'The duration of the toast in milliseconds.',
    })
    .int(),
  expand: z.boolean({
    description: 'Toasts will be expanded by default.',
  }),
  gap: z
    .number({
      description: 'Gap between toasts when expanded, in pixels.',
    })
    .int(),
  invert: z.boolean({
    description: 'Dark toasts in light mode and vice versa.',
  }),
  offset: z
    .number({
      description: 'Offset from the edges of the screen.',
    })
    .int(),
  position: z.enum(positions, {
    description: 'Place where the toasts will be rendered.',
  }),
  richColors: z.boolean({
    description: 'Makes error and success state more colorful.',
  }),
  theme: z.enum(themes, {
    description: "Toast's theme, either light, dark, or system.",
  }),
  visibleToasts: z
    .number({
      description: 'Amount of visible toasts.',
    })
    .int(),
});
