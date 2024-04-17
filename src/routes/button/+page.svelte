<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button, { variants, type Size, type Variant } from '$lib/components/button/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';

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

  <Label for="{sizeKey}">Size</Label>

  <Select.Root
    items="{sizeKeys.map((sizeKey) => ({
      label: sizeKey,
      value: sizeKey,
    }))}"
    onSelectedChange="{(selected) => {
      const url = new URL($page.url);

      if (selected) {
        url.searchParams.set(sizeKey, selected.value);
      } else {
        url.searchParams.delete(sizeKey);
      }

      goto(url);
    }}"
    portal="{null}"
    selected="{$size !== undefined
      ? {
          label: $size,
          value: $size,
        }
      : undefined}"
  >
    <Select.Input id="{sizeKey}" name="{sizeKey}" />

    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>

    <Select.Content>
      {#each sizeKeys as sizeKey, index (index)}
        <Select.Item value="{sizeKey}">
          {sizeKey}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>

  <Label for="{variantKey}">Variant</Label>

  <Select.Root
    items="{variantKeys.map((variantKey) => ({
      label: variantKey,
      value: variantKey,
    }))}"
    onSelectedChange="{(selected) => {
      const url = new URL($page.url);

      if (selected) {
        url.searchParams.set(variantKey, selected.value);
      } else {
        url.searchParams.delete(variantKey);
      }

      goto(url);
    }}"
    portal="{null}"
    selected="{$variant !== undefined
      ? {
          label: $variant,
          value: $variant,
        }
      : undefined}"
  >
    <Select.Input id="{variantKey}" name="{variantKey}" />

    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>

    <Select.Content>
      {#each variantKeys as variantKey, index (index)}
        <Select.Item value="{variantKey}">
          {variantKey}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</div>

<hr class="my-4 border-y border-border" />

<Button disabled="{$disabled}" size="{$size}" variant="{$variant}">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</Button>
