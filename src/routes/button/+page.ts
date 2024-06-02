import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { buttonStyles, type Size, type Variant } from '$lib/components/button/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      disabled: false,
      size: buttonStyles.defaultVariants.size!,
      variant: buttonStyles.defaultVariants.variant!,
    },
  });
  const sizes = Object.keys(buttonStyles.variants.size).map((size) => ({
    label: size,
    value: size,
  })) as Selected<Size>[];
  const variants = Object.keys(buttonStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<Variant>[];

  return {
    form,
    sizes,
    variants,
  };
}) satisfies PageLoad;
