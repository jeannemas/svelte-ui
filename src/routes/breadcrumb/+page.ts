import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles, type Breakpoint } from '$lib/components/breadcrumb/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      breakpoint: rootStyles.defaultVariants.breakpoint!,
    },
  });
  const breakpoints = Object.keys(rootStyles.variants.breakpoint).map((breakpoint) => ({
    label: breakpoint,
    value: breakpoint,
  })) as Selected<Breakpoint>[];

  return {
    breakpoints,
    form,
  };
}) satisfies PageLoad;
