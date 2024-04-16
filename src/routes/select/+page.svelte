<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import * as Select from '$lib/components/select/index.js';

  const fruitKey = 'fruit';
  const fruitKeys = ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'];
</script>

<script lang="ts">
  const fruit = derived(page, ($page) => {
    const fruit = $page.url.searchParams.get(fruitKey);

    return fruit && fruitKeys.includes(fruit) ? fruit : 'apple';
  });
</script>

<!-- <style lang="postcss">
</style> -->

<hr class="my-4 border-y border-border" />

<Select.Root
  items="{fruitKeys.map((fruitKey) => ({
    label: fruitKey,
    value: fruitKey,
  }))}"
  onSelectedChange="{(selected) => {
    const url = new URL($page.url);

    if (selected) {
      url.searchParams.set(fruitKey, selected.value);
    } else {
      url.searchParams.delete(fruitKey);
    }

    goto(url);
  }}"
  portal="{null}"
  selected="{$fruit !== undefined
    ? {
        label: $fruit,
        value: $fruit,
      }
    : undefined}"
>
  <Select.Input id="{fruitKey}" name="{fruitKey}" />

  <Select.Trigger>
    <Select.Value placeholder="Select a fruit" />
  </Select.Trigger>

  <Select.Content>
    {#each fruitKeys as fruitKey, index (index)}
      <Select.Item value="{fruitKey}">
        {fruitKey}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
