import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async ({ fetch }) => {
  const form = await superValidate(zod(schema));
  const posts: {
    body: string;
    id: number;
    title: string;
  }[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json(),
  );

  return {
    form,
    posts,
  };
}) satisfies PageLoad;
