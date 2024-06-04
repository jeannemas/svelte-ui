import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import * as AlertDialog from '$lib/components/alert-dialog/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      breakpoint: AlertDialog.rootStyles.defaultVariants.breakpoint!,
      closeOnEscape: true,
      closeOnOutsideClick: false,
      preventScroll: true,
      variant: AlertDialog.rootStyles.defaultVariants.variant!,
    },
  });
  const breakpoints = Object.keys(AlertDialog.rootStyles.variants.breakpoint).map((breakpoint) => ({
    label: breakpoint,
    value: breakpoint,
  })) as Selected<AlertDialog.Breakpoint>[];
  const variants = Object.keys(AlertDialog.rootStyles.variants.variant).map((variant) => ({
    label: variant,
    value: variant,
  })) as Selected<AlertDialog.Variant>[];

  return {
    breakpoints,
    form,
    variants,
  };
}) satisfies PageLoad;
