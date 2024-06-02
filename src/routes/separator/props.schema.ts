import z from 'zod';

import { separatorStyles, type Orientation } from '$lib/components/separator/index.js';

const orientations = Object.keys(separatorStyles.variants.orientation) as [
  Orientation,
  ...Orientation[],
];

export const schema = z.object({
  orientation: z.enum(orientations, {
    description: 'The orientation of the separator.',
  }),
});
