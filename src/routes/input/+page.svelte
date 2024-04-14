<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Input, { type Variant } from '$lib/components/input/index.js';

  const disabledKey = 'disabled';
  const placeholderKey = 'placeholder';
  const variantKey = 'variant';
  const variantKeys = ['number', 'text'];
</script>

<script lang="ts">
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
  const placeholder = derived(
    page,
    ($page) =>
      $page.url.searchParams.get(placeholderKey) ||
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  );
  const variant = derived(page, ($page) => {
    const variant = $page.url.searchParams.get(variantKey);

    return variant && variantKeys.includes(variant) ? (variant as Variant) : 'text';
  });
</script>

<!-- <style lang="postcss">
</style> -->

<div data-form>
  <label for="{disabledKey}" data-label>Disabled</label>

  <input
    checked="{$disabled}"
    id="{disabledKey}"
    name="{disabledKey}"
    type="checkbox"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      if (currentTarget.checked) {
        url.searchParams.set(disabledKey, '');
      } else {
        url.searchParams.delete(disabledKey);
      }

      goto(url);
    }}"
  />

  <label for="{placeholderKey}" data-label>Placeholder</label>

  <input
    id="{placeholderKey}"
    name="{placeholderKey}"
    type="text"
    value="{$placeholder}"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(placeholderKey, currentTarget.value);

      goto(url);
    }}"
  />

  <label for="{variantKey}" data-label>Variant</label>

  <select
    id="{variantKey}"
    name="{variantKey}"
    value="{$variant}"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(variantKey, currentTarget.value);

      goto(url);
    }}"
  >
    {#each variantKeys as variantKey, index (index)}
      <option selected="{variantKey === $variant}" value="{variantKey}">
        {variantKey}
      </option>
    {/each}
  </select>
</div>

<hr class="my-4 border-y border-border" />

<Input disabled="{$disabled}" placeholder="{$placeholder}" variant="{$variant}" />
