<script context="module" lang="ts">
  import { page } from '$app/stores';
  import route_meta_data from '$lib/../../.svelte-kit/types/route_meta_data.json';

  import '../app.pcss';

  const routesArray = Object.keys(route_meta_data);
</script>

<script lang="ts">
</script>

<style lang="postcss">
</style>

<svelte:head>
  <title>
    {$page.route.id}
  </title>
</svelte:head>

<div class="grid min-h-screen grid-cols-[auto_1fr]">
  <aside class="border-r border-border p-2">
    <ul>
      {#each routesArray as route, index (index)}
        <li>
          <a class="block p-2 font-mono underline-offset-4 hover:underline" href="{route}">
            {route}
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <div>
    <header class="flex flex-row items-center justify-between gap-x-2 border-b border-border p-2">
      <h1 class="text-xl font-bold capitalize">
        {$page.route.id?.replaceAll(/[^\w]/g, ' ').split(' ').filter(Boolean).join(' ')}
      </h1>

      <h3 class="text-md font-medium">
        {$page.status}
      </h3>
    </header>

    <main class="p-2">
      <slot />
    </main>
  </div>
</div>
