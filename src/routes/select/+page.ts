import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async ({ fetch }) => {
  const form = await superValidate(zod(schema), {
    defaults: {
      closeOnEscape: true,
      closeOnOutsideClick: true,
      disabled: false,
      loop: false,
      preventScroll: false,
    },
  });
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(
      (
        users: {
          id: number;
          name: string;
        }[],
      ) =>
        users.map(
          ({ id, name }) =>
            ({
              label: name,
              value: id.toString(),
            }) satisfies Selected<string>,
        ),
    );

  return {
    form,
    users,
  };
}) satisfies PageLoad;
