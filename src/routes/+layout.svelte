<script context="module" lang="ts">
  import { page } from '$app/stores';
  import route_meta_data from '$lib/../../.svelte-kit/types/route_meta_data.json';
  import Button from '$lib/components/button/Button.svelte';

  import '../app.pcss';

  const routes = Object.keys(route_meta_data);
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
      {#each routes as route, index (index)}
        <li>
          <Button class="block" href="{route}" size="lg" variant="link">
            {route}
          </Button>
        </li>
      {/each}
    </ul>
  </aside>

  <main>
    <header class="flex flex-row items-center justify-between gap-x-2 border-b border-border p-2">
      <h1 class="text-xl font-bold">
        {$page.route.id}
      </h1>

      <h3 class="text-md font-medium">
        {$page.status}
      </h3>
    </header>

    <div class="p-2">
      <slot />
    </div>
  </main>
</div>
