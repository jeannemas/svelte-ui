<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Checkbox from '$lib/components/checkbox/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Label from '$lib/components/label/index.js';
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
    <div class="flex flex-row items-center gap-x-2">
      <Checkbox.Root {...$props} id="terms" name="terms" />

      <Label for="terms">Accept terms and conditions</Label>
    </div>
  </svelte:fragment>
</ComponentDemoLayout>
