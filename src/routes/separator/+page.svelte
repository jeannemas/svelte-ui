<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator, { type Orientation } from '$lib/components/separator/index.js';
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

  $: selectedOrientation = {
    label: $props.orientation,
    value: $props.orientation,
  } satisfies Selected<Orientation>;

  function handleOrientationChange(selected?: Selected<Orientation>) {
    $props.orientation = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="orientation" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Orientation</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.orientations}"
          onSelectedChange="{handleOrientationChange}"
          selected="{selectedOrientation}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.orientation.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <div
      class="flex items-center justify-evenly text-sm"
      class:h-4="{$props.orientation === 'vertical'}"
      class:flex-col="{$props.orientation === 'horizontal'}"
      class:flex-row="{$props.orientation === 'vertical'}"
    >
      <div>Foo</div>

      <Separator {...$props} />

      <div>Bar</div>

      <Separator {...$props} />

      <div>Baz</div>
    </div>
  </svelte:fragment>
</ComponentDemoLayout>
