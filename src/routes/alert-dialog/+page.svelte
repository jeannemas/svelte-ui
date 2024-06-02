<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as AlertDialog from '$lib/components/alert-dialog/index.js';
  import Button from '$lib/components/button/index.js';
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

  $: selectedBreakpoint = {
    label: $props.breakpoint,
    value: $props.breakpoint,
  } satisfies Selected<AlertDialog.RootBreakpoint>;
  $: selectedVariant = {
    label: $props.variant,
    value: $props.variant,
  } satisfies Selected<AlertDialog.RootVariant>;

  function handleBreakpointChange(selected?: Selected<AlertDialog.RootBreakpoint>) {
    $props.breakpoint = selected!.value;
  }
  function handleVariantChange(selected?: Selected<AlertDialog.RootVariant>) {
    $props.variant = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="breakpoint" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Breakpoint</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.breakpoints}"
          onSelectedChange="{handleBreakpointChange}"
          selected="{selectedBreakpoint}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.breakpoint.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnEscape" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close on escape</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnEscape}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnEscape.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnOutsideClick" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close on outside click</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnOutsideClick}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnOutsideClick.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="preventScroll" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Prevent scroll</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.preventScroll}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.preventScroll.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="variant" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Variant</Form.Label>

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
    <AlertDialog.Root {...$props}>
      <AlertDialog.Trigger asChild let:builder>
        <Button builders="{[builder]}" variant="outline">Show Dialog</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>

          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialog.Description>
        </AlertDialog.Header>

        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>

          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  </svelte:fragment>
</ComponentDemoLayout>
