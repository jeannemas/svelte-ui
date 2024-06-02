<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Form from '$lib/components/form/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import * as Table from '$lib/components/table/index.js';
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
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="hoverable" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Hoverable</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.hoverable}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.hoverable.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Table.Root {...$props}>
      <Table.Header>
        <Table.Row>
          <Table.Head>Email</Table.Head>

          <Table.Head>Username</Table.Head>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {#each data.users as { email, id, username } (id)}
          <Table.Row>
            <Table.Cell>
              {email}
            </Table.Cell>

            <Table.Cell>
              {username}
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </svelte:fragment>
</ComponentDemoLayout>
