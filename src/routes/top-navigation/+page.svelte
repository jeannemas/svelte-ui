<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import type { Selected } from 'bits-ui';

  import { afterNavigate } from '$app/navigation';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import * as TopNavigation from '$lib/components/top-navigation/index.js';
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

  let open = false;

  $: selectedBreakpoint = {
    label: $props.breakpoint,
    value: $props.breakpoint,
  } satisfies Selected<TopNavigation.Breakpoint>;

  function handleBreakpointChange(selected?: Selected<TopNavigation.Breakpoint>) {
    $props.breakpoint = selected!.value;
  }

  afterNavigate((params) => {
    if (params.from?.url.pathname === params.to?.url.pathname || params.type === 'enter') {
      return;
    }

    // Close the mobile navbar when the page changes.
    open = false;
  });
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="breakpoint" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Breakpoint</Form.Label>

        <Select.Root
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
    <TopNavigation.Root {...$props} bind:open="{open}">
      <TopNavigation.Section>
        <TopNavigation.Button>Button</TopNavigation.Button>

        <TopNavigation.Link href="https://www.example.com/">Link</TopNavigation.Link>
      </TopNavigation.Section>
    </TopNavigation.Root>
  </svelte:fragment>
</ComponentDemoLayout>
