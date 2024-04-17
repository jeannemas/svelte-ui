<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Label from '$lib/components/label/index.js';
  import Switch from '$lib/components/switch/index.js';

  const disabledKey = 'disabled';
</script>

<script lang="ts">
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
</script>

<!-- <style lang="postcss">
</style> -->

<div data-form>
  <Label for="{disabledKey}">Disabled</Label>

  <Switch
    checked="{$disabled}"
    id="{disabledKey}"
    name="{disabledKey}"
    onCheckedChange="{(checked) => {
      const url = new URL($page.url);

      if (checked) {
        url.searchParams.set(disabledKey, '');
      } else {
        url.searchParams.delete(disabledKey);
      }

      goto(url);
    }}"
  />
</div>

<hr class="my-4 border-y border-border" />

<Switch disabled="{$disabled}" />
