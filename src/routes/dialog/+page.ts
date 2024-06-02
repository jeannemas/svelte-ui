import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      closeOnEscape: true,
      closeOnOutsideClick: true,
      preventScroll: true,
    },
  });

  return {
    form,
  };
}) satisfies PageLoad;
