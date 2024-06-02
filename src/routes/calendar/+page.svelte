<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Calendar from '$lib/components/calendar/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
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
  } satisfies Selected<Calendar.RootBreakpoint>;

  function handleBreakpointhange(selected?: Selected<Calendar.RootBreakpoint>) {
    $props.breakpoint = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="breakpoint" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Breakpoint</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.breakpoints}"
          onSelectedChange="{handleBreakpointhange}"
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

    <Form.Field name="fixedWeeks" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Fixed weeks</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.fixedWeeks}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.fixedWeeks.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="numberOfMonths" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Number of months</Form.Label>

        <Input {...attrs} {...constraints} variant="number" bind:value="{$props.numberOfMonths}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.numberOfMonths.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="pagedNavigation" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Paged navigation</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.pagedNavigation}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.pagedNavigation.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="preventDeselect" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Prevent deselect</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.preventDeselect}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.preventDeselect.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="readonly" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Readonly</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.readonly}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.readonly.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Calendar.Root {...$props} class="rounded-md border border-border" />
  </svelte:fragment>
</ComponentDemoLayout>
