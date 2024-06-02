<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod, zodClient } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import ComponentDemoLayout from '$routes/ComponentDemoLayout.svelte';

  import type { PageData } from './$types.js';
  import { schema } from './props.schema.js';
</script>

<script lang="ts">
  export let data: PageData;

  const form = createSuperForm(data.form, {
    SPA: true,
    validators: zodClient(schema),
  });
  const { form: props } = form;
  const adapter = zod(
    z.object({
      username: z.string().min(2).max(50),
    }),
  );
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="debug" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Debug</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.debug}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.debug.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Form.Root {...$props} superForm="{superForm}">
      <Form.Field name="username" superForm="{superForm}" let:constraints>
        <Form.Control let:attrs>
          <Form.Label>Placeholder</Form.Label>

          <Input
            {...attrs}
            {...constraints}
            autocomplete="off"
            variant="text"
            bind:value="{$superFormData.username}"
          />
        </Form.Control>

        <Form.Description>This is your public display name.</Form.Description>

        <Form.FieldErrors />
      </Form.Field>
    </Form.Root>
  </svelte:fragment>
</ComponentDemoLayout>
