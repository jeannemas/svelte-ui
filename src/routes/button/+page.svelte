<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
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

  $: selectedSize = {
    label: $props.size,
    value: $props.size,
  } satisfies Selected<Button.Size>;
  $: selectedVariant = {
    label: $props.variant,
    value: $props.variant,
  } satisfies Selected<Button.Variant>;

  function handleSizeChange(selected?: Selected<Button.Size>) {
    $props.size = selected!.value;
  }
  function handleVariantChange(selected?: Selected<Button.Variant>) {
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

    <Form.Field name="size" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Size</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.sizes}"
          onSelectedChange="{handleSizeChange}"
          selected="{selectedSize}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.size.description}
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
    <Button.Root {...$props}>Lorem ipsum</Button.Root>
  </svelte:fragment>
</ComponentDemoLayout>
