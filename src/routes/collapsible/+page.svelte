<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';
  import * as Form from '$lib/components/form/index.js';
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
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
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
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Collapsible.Root {...$props}>
      <Collapsible.Trigger asChild let:builder>
        <Button.Root builders="{[builder]}">
          Toggle collapsible, state: {builder['data-state']}
        </Button.Root>
      </Collapsible.Trigger>

      <Collapsible.Content class="bg-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo velit facilis illum
        placeat numquam consectetur culpa ab laboriosam aliquid! Facere, consequatur ex maiores
        dolorum aut commodi quis nostrum impedit?
      </Collapsible.Content>
    </Collapsible.Root>
  </svelte:fragment>
</ComponentDemoLayout>
