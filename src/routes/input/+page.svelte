<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Input, { type Variant } from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';

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
  <Label for="{disabledKey}">Disabled</Label>

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

  <Label for="{placeholderKey}">Placeholder</Label>

  <Input
    id="{placeholderKey}"
    name="{placeholderKey}"
    type="text"
    value="{$placeholder}"
    variant="text"
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(placeholderKey, currentTarget.value);

      goto(url);
    }}"
  />

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

<Input disabled="{$disabled}" placeholder="{$placeholder}" variant="{$variant}" />
