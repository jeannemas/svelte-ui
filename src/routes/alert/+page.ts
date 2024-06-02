import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles, type Variant } from '$lib/components/alert/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      variant: rootStyles.defaultVariants.variant!,
    },
  });
  const variants = Object.keys(rootStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<Variant>[];

  return {
    form,
    variants,
  };
}) satisfies PageLoad;
