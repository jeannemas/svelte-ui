import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles, type RootDir } from '$lib/components/dropdown-menu/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      closeOnEscape: true,
      closeOnItemClick: true,
      closeOnOutsideClick: true,
      dir: rootStyles.defaultVariants.dir!,
      disableFocusFirstItem: false,
      loop: false,
      preventScroll: true,
      typeahead: true,
    },
  });
  const dirs = Object.keys(rootStyles.variants.dir).map((dir) => ({
    label: dir,
    value: dir,
  })) as Selected<RootDir>[];

  return {
    form,
    dirs,
  };
}) satisfies PageLoad;
