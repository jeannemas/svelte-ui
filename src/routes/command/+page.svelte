<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Command from '$lib/components/command/index.js';
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
    <Form.Field name="loop" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Loop</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.loop}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.loop.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Command.Root
      class="mx-auto rounded-lg border shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg"
      {...$props}
    >
      <Command.Input placeholder="Type a command or search..." />

      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Todo">
          {#each data.todos.filter(({ completed }) => !completed) as { id, title } (id)}
            <Command.Item>
              {title}
            </Command.Item>
          {/each}
        </Command.Group>

        <Command.Separator />

        <Command.Group heading="Completed">
          {#each data.todos.filter(({ completed }) => completed) as { id, title } (id)}
            <Command.Item>
              {title}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </svelte:fragment>
</ComponentDemoLayout>
