import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { rootStyles } from '$lib/components/accordion/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async ({ fetch }) => {
  const form = await superValidate(zod(schema), {
    defaults: {
      disabled: rootStyles.defaultVariants.disabled!,
    },
  });
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
