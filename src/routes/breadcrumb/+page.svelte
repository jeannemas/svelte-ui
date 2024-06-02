<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
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

  $: selectedBreakpoint = {
    label: $props.breakpoint,
    value: $props.breakpoint,
  } satisfies Selected<Breadcrumb.RootBreakpoint>;

  function handleBreakpointChange(selected?: Selected<Breadcrumb.RootBreakpoint>) {
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
