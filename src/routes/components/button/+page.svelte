<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button, { variants, type Size, type Variant } from '$lib/components/button/Button.svelte';

  const defaultSize = variants.defaultVariants.size;
  const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const defaultVariant = variants.defaultVariants.variant;
  const disabledKey = 'disabled';
  const sizeKey = 'size';
  const sizeKeys = Object.keys(variants.variants.size);
  const textKey = 'text';
  const variantKey = 'variant';
  const variantKeys = Object.keys(variants.variants.variant);
</script>

<script lang="ts">
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
  const size = derived(page, ($page) => {
    const size = $page.url.searchParams.get(sizeKey);

    return size && sizeKeys.includes(size) ? (size as Size) : defaultSize;
  });
  const text = derived(page, ($page) => $page.url.searchParams.get(textKey) ?? defaultText);
  const variant = derived(page, ($page) => {
    const variant = $page.url.searchParams.get(variantKey);

    return variant && variantKeys.includes(variant) ? (variant as Variant) : defaultVariant;
  });
</script>

<style lang="postcss">
  label {
    @apply text-right font-bold;
  }

  [data-control] {
    @apply rounded border border-border px-2 py-1;
  }
</style>

<div class="grid grid-cols-[auto_1fr] justify-items-stretch gap-2">
  <label for="{disabledKey}">Disabled</label>

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

  <label for="{sizeKey}">Size</label>

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

  <label for="{textKey}">Text</label>

  <textarea
    id="{textKey}"
    name="{textKey}"
    value="{$text}"
    data-control
    on:input="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(textKey, currentTarget.value);

      goto(url, { keepFocus: true });
    }}"
  ></textarea>

  <label for="{variantKey}">Variant</label>

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
  {$text}
</Button>
