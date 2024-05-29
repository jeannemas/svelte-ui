<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Alert from '$lib/components/alert/index.js';
  import * as Form from '$lib/components/form/index.js';
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
    <Alert.Root {...$props}>
      <Alert.Title>Heads up!</Alert.Title>

      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert.Root>
  </svelte:fragment>
</ComponentDemoLayout>
