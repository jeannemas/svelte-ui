import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import * as Breadcrumb from '$lib/components/breadcrumb/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      breakpoint: Breadcrumb.rootStyles.defaultVariants.breakpoint!,
    },
  });
  const breakpoints = Object.keys(Breadcrumb.rootStyles.variants.breakpoint).map((breakpoint) => ({
    label: breakpoint,
    value: breakpoint,
  })) as Selected<Breadcrumb.Breakpoint>[];

  return {
    breakpoints,
    form,
  };
}) satisfies PageLoad;
