<script context="module" lang="ts">
  import Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';
</script>

<script lang="ts">
  let open = false;
</script>

<!-- <style lang="postcss">
</style> -->

<Collapsible.Root bind:open="{open}">
  <Collapsible.Trigger asChild let:builder>
    <Button builders="{[builder]}">
      {builder['data-state']}
    </Button>
  </Collapsible.Trigger>

  <Collapsible.Content class="bg-slate-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo velit facilis illum placeat
    numquam consectetur culpa ab laboriosam aliquid! Facere, consequatur ex maiores dolorum aut
    commodi quis nostrum impedit?
  </Collapsible.Content>
</Collapsible.Root>
