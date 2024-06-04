import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import * as Alert from '$lib/components/alert/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      variant: Alert.rootStyles.defaultVariants.variant!,
    },
  });
  const variants = Object.keys(Alert.rootStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<Alert.Variant>[];

  return {
    form,
    variants,
  };
}) satisfies PageLoad;
