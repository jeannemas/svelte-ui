<script context="module" lang="ts">
  import CalculatorIcon from 'lucide-svelte/icons/calculator';
  import CalendarIcon from 'lucide-svelte/icons/calendar';
  import CreditCardIcon from 'lucide-svelte/icons/credit-card';
  import SettingsIcon from 'lucide-svelte/icons/settings';
  import SmileIcon from 'lucide-svelte/icons/smile';
  import UserIcon from 'lucide-svelte/icons/user';
  import { onMount } from 'svelte';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Command from '$lib/components/command/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        loop: z.boolean().default(false),
        open: z.boolean().default(false),
      })
      .partial(),
  );
</script>

<script lang="ts">
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;

  onMount(() => {
    function handleKeydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();

        $superFormData.open = true;
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{superForm}">
        <Form.Field name="loop" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Loop</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.loop}" />
          </Form.Control>

          <Form.Description>
            Optionally set to

            <code>true</code>

            to enable looping through the items when the user reaches the end of the list using the
            keyboard.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="open" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
          </Form.Control>

          <Form.Description>The open state of the command dialog.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <p class="text-sm text-muted-foreground">
        Press

        <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
          <span class="text-xs">⌘</span>

          <span>+</span>

          <span>K</span>
        </kbd>
      </p>

      <Command.Dialog {...$superFormData} bind:open="{$superFormData.open}">
        <Command.Input placeholder="Type a command or search..." />

        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Suggestions">
            <Command.Item class="gap-x-2">
              <CalendarIcon />

              <span>Calendar</span>
            </Command.Item>

            <Command.Item class="gap-x-2">
              <SmileIcon />

              <span>Search Emoji</span>
            </Command.Item>

            <Command.Item class="gap-x-2">
              <CalculatorIcon />

              <span>Calculator</span>
            </Command.Item>
          </Command.Group>

          <Command.Separator />

          <Command.Group heading="Settings">
            <Command.Item class="gap-x-2">
              <UserIcon />

              <span>Profile</span>

              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>

            <Command.Item class="gap-x-2">
              <CreditCardIcon />

              <span>Billing</span>

              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>

            <Command.Item class="gap-x-2">
              <SettingsIcon />

              <span>Settings</span>

              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
