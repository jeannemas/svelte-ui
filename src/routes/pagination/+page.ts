import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      count: 20,
      perPage: 10,
      siblingCount: 1,
    },
  });

  return {
    form,
  };
}) satisfies PageLoad;
