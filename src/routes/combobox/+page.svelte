<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Combobox from '$lib/components/combobox/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';
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
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="disabled" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Disabled</Form.Label>

        <Switch {...attrs} {...constraints} bind:checked="{$props.disabled}" />
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
        {#each inputValue && touchedInput ? data.users.filter(({ label }) => label
                ?.toLowerCase()
                .includes(inputValue.toLowerCase())) : data.users as user (user.value)}
          <Combobox.Item label="{user.label}" value="{user.value}">
            {user.label}
          </Combobox.Item>
        {:else}
          <Combobox.Item disabled value="{null}">No users found</Combobox.Item>
        {/each}
      </Combobox.Content>

      <Combobox.HiddenInput />
    </Combobox.Root>
  </svelte:fragment>
</ComponentDemoLayout>
