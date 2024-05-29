import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles, type RootVariant } from '$lib/components/card/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema));
  const variants = Object.keys(rootStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<RootVariant>[];

  return {
    form,
    variants,
  };
}) satisfies PageLoad;
