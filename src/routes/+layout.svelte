<script context="module" lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import { derived } from 'svelte/store';

  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import route_meta_data from '$lib/../../.svelte-kit/types/route_meta_data.json';
  import * as TopNavigation from '$lib/components/top-navigation/index.js';

  import '../app.pcss';

  const routesArray = Object.keys(route_meta_data).sort();
</script>

<script lang="ts">
  const title = derived(page, ($page) => {
    const str =
      $page.route.id?.replaceAll(/[^\w]/g, ' ').split(' ').filter(Boolean).join(' ') ?? '';

    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  let open = false;

  afterNavigate((params) => {
    if (params.from?.url.pathname === params.to?.url.pathname || params.type === 'enter') {
      return;
    }

    // Close the mobile navbar when the page changes.
    open = false;
  });
</script>

<!-- <style lang="postcss">
</style> -->

<svelte:head>
  <title>
    SvelteUI | {$title}
  </title>
</svelte:head>

<!-- TODO we currently only default to light mode -->
<ModeWatcher defaultMode="light" track="{false}" />

<div class="grid grid-cols-1 lg:min-h-screen lg:grid-cols-[auto_1fr]">
  <aside class="hidden border-r border-border p-1 lg:block">
    <ul>
      {#each routesArray as route, index (index)}
        <li>
          <a
            class="block p-1 font-mono underline-offset-4 hover:underline"
            class:underline="{$page.url.pathname === route}"
            href="{route}"
          >
            {route}
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <TopNavigation.Root class="lg:hidden" bind:open="{open}">
    <TopNavigation.Section>
      {#each routesArray as route, index (index)}
        <TopNavigation.Link
          active="{$page.url.pathname === route}"
          class="font-mono"
          href="{route}"
        >
          {route}
        </TopNavigation.Link>
      {/each}
    </TopNavigation.Section>
  </TopNavigation.Root>

  <div>
    <header class="border-b border-border p-2">
      <h1 class="text-xl font-bold">
        {$title}
      </h1>
    </header>

    <main class="p-2">
      <slot />
    </main>
  </div>
</div>
