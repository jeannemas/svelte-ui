<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';

  const openKey = 'open';
</script>

<script lang="ts">
  const open = derived(page, ($page) => $page.url.searchParams.has(openKey));
</script>

<style lang="postcss">
</style>

<Collapsible.Root
  onOpenChange="{(open) => {
    const url = new URL($page.url);

    if (open) {
      url.searchParams.set(openKey, '');
    } else {
      url.searchParams.delete(openKey);
    }

    goto(url);
  }}"
  open="{$open}"
>
  <Collapsible.Trigger asChild let:builder>
    <Button builders="{[builder]}">
      {$open}
    </Button>
  </Collapsible.Trigger>

  <Collapsible.Content class="bg-slate-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo velit facilis illum placeat
    numquam consectetur culpa ab laboriosam aliquid! Facere, consequatur ex maiores dolorum aut
    commodi quis nostrum impedit?
  </Collapsible.Content>
</Collapsible.Root>
