import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { separatorStyles, type Orientation } from '$lib/components/separator/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      orientation: separatorStyles.defaultVariants.orientation!,
    },
  });
  const orientations = Object.keys(separatorStyles.variants.orientation).map((orientation) => ({
    label: orientation,
    value: orientation,
  })) as Selected<Orientation>[];

  return {
    form,
    orientations,
  };
}) satisfies PageLoad;
