import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { variants as inputVariants, type Variant } from '$lib/components/input/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      disabled: false,
      placeholder: '',
      variant: 'text',
    },
  });
  const variants = inputVariants.map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<Variant>[];

  return {
    form,
    variants,
  };
}) satisfies PageLoad;
