<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Label from '$lib/components/label/index.js';
  import Switch from '$lib/components/switch/index.js';
  import Textarea from '$lib/components/textarea/index.js';

  const disabledKey = 'disabled';
  const placeholderKey = 'placeholder';
</script>

<script lang="ts">
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
  const placeholder = derived(
    page,
    ($page) =>
      $page.url.searchParams.get(placeholderKey) ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  );
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

  <Label for="{placeholderKey}">Placeholder</Label>

  <Textarea
    id="{placeholderKey}"
    name="{placeholderKey}"
    value="{$placeholder}"
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(placeholderKey, currentTarget.value);

      goto(url);
    }}"
  />
</div>

<hr class="my-4 border-y border-border" />

<Textarea disabled="{$disabled}" placeholder="{$placeholder}" />
