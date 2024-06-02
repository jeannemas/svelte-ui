<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as DropdownMenu from '$lib/components/dropdown-menu/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
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

  $: selectedDir = {
    label: $props.dir,
    value: $props.dir,
  } satisfies Selected<DropdownMenu.RootDir>;

  function handleDirChange(selected?: Selected<DropdownMenu.RootDir>) {
    $props.dir = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="closeOnEscape" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Close on escape</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnEscape}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnEscape.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnItemClick" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Close on item click</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnItemClick}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnItemClick.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnOutsideClick" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Close on outside click</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnOutsideClick}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnOutsideClick.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="dir" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Direction</Form.Label>

        <Select.Root
          {...constraints}
          items="{data.dirs}"
          onSelectedChange="{handleDirChange}"
          selected="{selectedDir}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.dir.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="disableFocusFirstItem" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Disable focus first item</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disableFocusFirstItem}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.disableFocusFirstItem.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

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

    <Form.Field name="preventScroll" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Prevent scroll</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.preventScroll}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.preventScroll.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="typeahead" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Typeahead</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.typeahead}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.typeahead.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <DropdownMenu.Root {...$props}>
      <DropdownMenu.Trigger asChild let:builder>
        <Button builders="{[builder]}" variant="outline">Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content class="w-64">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>Profile</span>

            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Billing</span>

            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Settings</span>

            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>Keyboard shortcuts</span>

            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>Team</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>

            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Email</DropdownMenu.Item>

              <DropdownMenu.Item>Message</DropdownMenu.Item>

              <DropdownMenu.Item>More...</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Item>
            <span>New Team</span>

            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>Github</DropdownMenu.Item>

        <DropdownMenu.Item>Support</DropdownMenu.Item>

        <DropdownMenu.Item>API</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>
          <span>Log out</span>

          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </svelte:fragment>
</ComponentDemoLayout>
