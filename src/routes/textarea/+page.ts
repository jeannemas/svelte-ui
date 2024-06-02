import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      disabled: false,
      placeholder: 'Tell us a little bit about yourself',
      readonly: false,
    },
  });

  return {
    form,
  };
}) satisfies PageLoad;
