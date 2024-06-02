<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import * as Tooltip from '$lib/components/tooltip/index.js';
  import ComponentDemoLayout from '$routes/ComponentDemoLayout.svelte';

  const adapter = zod(
    z
      .object({
        closeDelay: z.number().min(0).default(0),
        closeOnEscape: z.boolean().default(false),
        closeOnPointerDown: z.boolean().default(false),
        disableHoverableContent: z.boolean().default(false),
        openDelay: z.number().min(0).default(0),
      })
      .partial(),
  );
</script>

<script lang="ts">
  const form = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
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

      <Form.Description>The tooltip close delay (in ms).</Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnEscape" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close on escape</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnEscape}" />
      </Form.Control>

      <Form.Description>Whether to close the tooltip on escape.</Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnPointerDown" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Close on pointer down</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnPointerDown}" />
      </Form.Control>

      <Form.Description>Whether to close the tooltip on pointer down.</Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="disableHoverableContent" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Disable hoverable content</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disableHoverableContent}" />
      </Form.Control>

      <Form.Description>Whether to disbale the hoverable content.</Form.Description>

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

      <Form.Description>The tooltip open delay (in ms).</Form.Description>

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
