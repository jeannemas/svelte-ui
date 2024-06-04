import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import * as Button from '$lib/components/button/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      disabled: false,
      size: Button.rootStyles.defaultVariants.size!,
      variant: Button.rootStyles.defaultVariants.variant!,
    },
  });
  const sizes = Object.keys(Button.rootStyles.variants.size).map((size) => ({
    label: size,
    value: size,
  })) as Selected<Button.Size>[];
  const variants = Object.keys(Button.rootStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<Button.Variant>[];

  return {
    form,
    sizes,
    variants,
  };
}) satisfies PageLoad;
