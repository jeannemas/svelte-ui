<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Breadcrumb from '$lib/components/breadcrumb/index.js';
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
    <Form.Field name="breakpoint" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Breakpoint</Form.Label>

        <Select.Root
          items="{data.breakpoints}"
          onSelectedChange="{(selected) => ($props.breakpoint = selected?.value)}"
          selected="{$props.breakpoint && {
            label: $props.breakpoint,
            value: $props.breakpoint,
          }}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content>
            {#each data.breakpoints as breakpoint (breakpoint.value)}
              <Select.Item value="{breakpoint.value}">
                {breakpoint.label}
              </Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.breakpoint.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Breadcrumb.Root {...$props}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Separator />

        <Breadcrumb.Item>
          <Breadcrumb.Ellipsis />
        </Breadcrumb.Item>

        <Breadcrumb.Separator />

        <Breadcrumb.Item>
          <Breadcrumb.Link href="#/docs/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>

        <Breadcrumb.Separator />

        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  </svelte:fragment>
</ComponentDemoLayout>
