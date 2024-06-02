<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { toast } from 'svelte-sonner';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Sonner, { type Dir, type Position, type Theme } from '$lib/components/sonner/index.js';
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

  $: selectedDir = {
    label: $props.dir,
    value: $props.dir,
  } satisfies Selected<Dir>;
  $: selectedPosition = {
    label: $props.position,
    value: $props.position,
  } satisfies Selected<Position>;
  $: selectedTheme = {
    label: $props.theme,
    value: $props.theme,
  } satisfies Selected<Theme>;

  function handleDirChange(selected?: Selected<Dir>) {
    $props.dir = selected!.value;
  }
  function handlePositionChange(selected?: Selected<Position>) {
    $props.position = selected!.value;
  }
  function handleThemeChange(selected?: Selected<Theme>) {
    $props.theme = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="closeButton" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close button</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeButton}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeButton.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="dir" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Direction</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.dirs}"
          onSelectedChange="{handleDirChange}"
          selected="{selectedDir}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.dir.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="duration" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Duration</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          min="{100}"
          step="{100}"
          variant="number"
          bind:value="{$props.duration}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.duration.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="expand" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Expand</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.expand}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.expand.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="gap" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Gap</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          min="{0}"
          step="{1}"
          variant="number"
          bind:value="{$props.gap}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.gap.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="invert" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Invert</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.invert}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.invert.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="offset" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Offset</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          min="{0}"
          step="{1}"
          variant="number"
          bind:value="{$props.offset}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.offset.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="position" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Position</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.positions}"
          onSelectedChange="{handlePositionChange}"
          selected="{selectedPosition}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.position.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="richColors" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Rich colors</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.richColors}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.richColors.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="theme" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Theme</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.themes}"
          onSelectedChange="{handleThemeChange}"
          selected="{selectedTheme}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.theme.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="visibleToasts" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Visible toasts</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          min="{1}"
          step="{1}"
          variant="number"
          bind:value="{$props.visibleToasts}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.visibleToasts.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Button
      variant="outline"
      on:click="{() =>
        toast.success('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.info('Undo'),
          },
        })}"
    >
      Show Toast
    </Button>

    <Sonner {...$props} />
  </svelte:fragment>
</ComponentDemoLayout>
