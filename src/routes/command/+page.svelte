<script context="module" lang="ts">
  import { onMount } from 'svelte';
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

  let open = false;

  $: activeTodos = data.todos.filter(({ completed }) => !completed);
  $: completedTodos = data.todos.filter(({ completed }) => completed);

  onMount(() => {
    function handleKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();

        open = true;
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  });
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
    <p class="text-sm text-muted-foreground">
      Press

      <kbd
        class="pointer-events-none inline-flex h-6 select-none flex-row items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
      >
        <span class="text-xs">⌘</span> + K
      </kbd>
    </p>

    <Command.Dialog {...$props} bind:open="{open}">
      <Command.Input placeholder="Type a command or search..." />

      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Todo">
          {#each activeTodos as todo (todo.id)}
            <Command.Item>
              {todo.title}
            </Command.Item>
          {/each}
        </Command.Group>

        <Command.Separator />

        <Command.Group heading="Completed">
          {#each completedTodos as todo (todo.id)}
            <Command.Item>
              {todo.title}
            </Command.Item>
          {/each}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  </svelte:fragment>
</ComponentDemoLayout>
