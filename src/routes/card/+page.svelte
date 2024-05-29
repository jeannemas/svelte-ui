<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Card from '$lib/components/card/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';
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
    <Form.Field name="variant" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Variant</Form.Label>

        <Select.Root
          items="{data.variants}"
          onSelectedChange="{(selected) => ($props.variant = selected?.value)}"
          selected="{$props.variant && {
            label: $props.variant,
            value: $props.variant,
          }}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content>
            {#each data.variants as variant (variant.value)}
              <Select.Item value="{variant.value}">
                {variant.label}
              </Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.variant.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Card.Root {...$props}>
      <Card.Header>
        <Card.Title>Create project</Card.Title>

        <Card.Description>Deploy your new project in one-click.</Card.Description>
      </Card.Header>

      <Card.Content class="flex flex-col gap-y-2">
        <Label for="name">Name</Label>

        <Input autocomplete="off" id="name" placeholder="Name of your project" variant="text" />
      </Card.Content>

      <Card.Footer class="flex flex-row justify-between">
        <Button variant="outline">Cancel</Button>

        <Button>Deploy</Button>
      </Card.Footer>
    </Card.Root>
  </svelte:fragment>
</ComponentDemoLayout>
