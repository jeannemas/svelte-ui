<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Combobox from '$lib/components/combobox/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import ComponentDemoLayout from '$routes/ComponentDemoLayout.svelte';

  import type { PageData } from './$types.js';
  import { schema } from './props.schema.js';
</script>

<script lang="ts">
  export let data: PageData;

  const form = superForm(data.form, {
    SPA: true,
    validators: zodClient(schema),
  });
  const { form: props } = form;

  let inputValue = '';
  let touchedInput = false;

  $: filteredUsers =
    inputValue && touchedInput
      ? data.users.filter(({ label }) => label?.toLowerCase().includes(inputValue.toLowerCase()))
      : data.users;
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="disabled" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Disabled</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disabled}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.disabled.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Combobox.Root
      {...$props}
      items="{data.users}"
      bind:inputValue="{inputValue}"
      bind:touchedInput="{touchedInput}"
    >
      <Combobox.Input placeholder="Search a user" />

      <Combobox.Content>
        <Combobox.Group>
          <Combobox.GroupLabel>Users</Combobox.GroupLabel>

          {#each filteredUsers as { label, value } (value)}
            <Combobox.Item label="{label}" value="{value}">
              <Combobox.ItemIndicator />

              <Combobox.Label>
                {label}
              </Combobox.Label>
            </Combobox.Item>
          {:else}
            <Combobox.Item disabled value="{null}">
              <Combobox.Label>No users found</Combobox.Label>
            </Combobox.Item>
          {/each}
        </Combobox.Group>
      </Combobox.Content>

      <Combobox.HiddenInput />
    </Combobox.Root>
  </svelte:fragment>
</ComponentDemoLayout>
