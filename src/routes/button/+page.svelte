<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button, { variants, type Size, type Variant } from '$lib/components/button/index.js';

  const disabledKey = 'disabled';
  const sizeKey = 'size';
  const sizeKeys = Object.keys(variants.variants.size);
  const variantKey = 'variant';
  const variantKeys = Object.keys(variants.variants.variant);
</script>

<script lang="ts">
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
  const size = derived(page, ($page) => {
    const size = $page.url.searchParams.get(sizeKey);

    return size && sizeKeys.includes(size) ? (size as Size) : variants.defaultVariants.size;
  });
  const variant = derived(page, ($page) => {
    const variant = $page.url.searchParams.get(variantKey);

    return variant && variantKeys.includes(variant)
      ? (variant as Variant)
      : variants.defaultVariants.variant;
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

  <label for="{sizeKey}" data-label>Size</label>

  <select
    id="{sizeKey}"
    name="{sizeKey}"
    value="{$size}"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(sizeKey, currentTarget.value);

      goto(url);
    }}"
  >
    {#each sizeKeys as sizeKey, index (index)}
      <option selected="{sizeKey === $size}" value="{sizeKey}">
        {sizeKey}
      </option>
    {/each}
  </select>

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

<Button disabled="{$disabled}" size="{$size}" variant="{$variant}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Button>
