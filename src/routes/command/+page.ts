import type { PageLoad } from './$types.js';

export const load = (async ({ fetch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: {
    completed: boolean;
    id: number;
    title: string;
  }[] = await response.json();

  return {
    todos,
  };
}) satisfies PageLoad;
