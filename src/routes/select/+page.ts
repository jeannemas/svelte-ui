import type { PageLoad } from './$types.js';

export const load = (async ({ fetch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: {
    id: number;
    name: string;
  }[] = await response.json();

  return {
    users,
  };
}) satisfies PageLoad;
