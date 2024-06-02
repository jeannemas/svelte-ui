<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Form from '$lib/components/form/index.js';
  import Input, { type Variant } from '$lib/components/input/index.js';
  import * as Select from '$lib/components/select/index.js';
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

  $: selectedVariant = {
    label: $props.variant,
    value: $props.variant,
  } satisfies Selected<Variant>;

  function handleVariantChange(selected?: Selected<Variant>) {
    $props.variant = selected!.value;
  }
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

    <Form.Field name="placeholder" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Placeholder</Form.Label>

        <Input {...attrs} {...constraints} variant="text" bind:value="{$props.placeholder}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.placeholder.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="variant" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Variant</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.variants}"
          onSelectedChange="{handleVariantChange}"
          selected="{selectedVariant}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.variant.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Input {...$props} />
  </svelte:fragment>
</ComponentDemoLayout>
