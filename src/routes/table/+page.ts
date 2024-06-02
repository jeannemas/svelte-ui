import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async ({ fetch }) => {
  const form = await superValidate(zod(schema), {
    defaults: {
      hoverable: false,
    },
  });
  const users: {
    id: number;
    email: string;
    username: string;
  }[] = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json(),
  );

  return {
    form,
    users,
  };
}) satisfies PageLoad;
