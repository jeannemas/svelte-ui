import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles, type RootOrientation } from '$lib/components/tabs/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      activateOnFocus: false,
      loop: false,
      orientation: rootStyles.defaultVariants.orientation!,
    },
  });
  const orientations = Object.keys(rootStyles.variants.orientation).map(
    (orientation) =>
      ({
        label: orientation,
        value: orientation,
      }) as Selected<RootOrientation>,
  );

  return {
    form,
    orientations,
  };
}) satisfies PageLoad;
