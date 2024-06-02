import z from 'zod';

import { rootStyles, type RootOrientation } from '$lib/components/tabs/index.js';

const orientations = Object.keys(rootStyles.variants.orientation) as [
  RootOrientation,
  ...RootOrientation[],
];

export const schema = z.object({
  activateOnFocus: z.boolean({
    description: 'Whether or not the tabs should activate when the trigger is focused.',
  }),
  loop: z.boolean({
    description: 'Whether or not the tabs should loop around when the end is reached.',
  }),
  orientation: z.enum(orientations, {
    description: 'The orientation of the tabs, which determines how keyboard navigation works.',
  }),
});
