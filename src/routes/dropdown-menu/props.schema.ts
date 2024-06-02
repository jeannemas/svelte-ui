import z from 'zod';

import { rootStyles, type RootDir } from '$lib/components/dropdown-menu/index.js';

const dirs = Object.keys(rootStyles.variants.dir) as [RootDir, ...RootDir[]];

export const schema = z.object({
  closeOnEscape: z.boolean({
    description: 'Whether or not to close the menu when the escape key is pressed.',
  }),
  closeOnItemClick: z.boolean({
    description: 'Whether or not to close the menu when an internal item is clicked.',
  }),
  closeOnOutsideClick: z.boolean({
    description: 'Whether or not to close the menu when a click occurs outside of it.',
  }),
  dir: z.enum(dirs, {
    description: 'The direction of the text in the dropdown menu.',
  }),
  disableFocusFirstItem: z.boolean({
    description: 'Optionally prevent focusing the first item in the menu.',
  }),
  loop: z.boolean({
    description: 'Whether or not to loop the menu navigation.',
  }),
  preventScroll: z.boolean({
    description: 'Whether or not to prevent scrolling when the menu is open.',
  }),
  typeahead: z.boolean({
    description: 'Whether to use typeahead to automatically focus elements.',
  }),
});
