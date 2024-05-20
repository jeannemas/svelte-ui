<script context="module" lang="ts">
  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Combobox from '$lib/components/combobox/index.js';
</script>

<script lang="ts">
  const fruits = [
    { value: 'mango', label: 'Mango' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'apple', label: 'Apple' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'orange', label: 'Orange' },
  ];

  let inputValue = '';
  let touchedInput = false;

  $: filteredFruits =
    inputValue && touchedInput
      ? fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()))
      : fruits;
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <!--  -->
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Combobox.Root
        items="{filteredFruits}"
        bind:inputValue="{inputValue}"
        bind:touchedInput="{touchedInput}"
      >
        <Combobox.Input placeholder="Search a fruit" />

        <Combobox.Content>
          {#each filteredFruits as fruit (fruit.value)}
            <Combobox.Item label="{fruit.label}" value="{fruit.value}">
              {fruit.label}
            </Combobox.Item>
          {:else}
            <div class="px-5 py-2 text-sm text-muted-foreground">No results found</div>
          {/each}
        </Combobox.Content>

        <Combobox.HiddenInput name="favoriteFruit" />
      </Combobox.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
