<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import * as Tooltip from '$lib/components/tooltip/index.js';
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
    <Form.Field name="closeDelay" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close delay</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="decimal"
          step="{0.05}"
          variant="number"
          bind:value="{$props.closeDelay}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeDelay.description}
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

    <Form.Field name="closeOnPointerDown" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close on pointer down</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnPointerDown}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnPointerDown.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="disableHoverableContent" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Disable hoverable content</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disableHoverableContent}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.disableHoverableContent.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="openDelay" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Open delay</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="decimal"
          step="{0.05}"
          variant="number"
          bind:value="{$props.openDelay}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.openDelay.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Tooltip.Root {...$props}>
      <Tooltip.Trigger asChild let:builder>
        <Button builders="{[builder]}" variant="outline">Hover</Button>
      </Tooltip.Trigger>

      <Tooltip.Content>
        <p>Add to library</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </svelte:fragment>
</ComponentDemoLayout>
