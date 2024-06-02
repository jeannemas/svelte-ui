<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Card from '$lib/components/card/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import * as Tabs from '$lib/components/tabs/index.js';
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

  $: selectedOrientation = {
    label: $props.orientation,
    value: $props.orientation,
  } satisfies Selected<Tabs.RootOrientation>;

  function handleOrientationChange(selected?: Selected<Tabs.RootOrientation>) {
    $props.orientation = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="activateOnFocus" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Activate on focus</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.activateOnFocus}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.activateOnFocus.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="loop" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Loop</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.loop}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.loop.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="orientation" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label required="{constraints?.required}">Orientation</Form.Label>

        <Select.Root
          items="{data.orientations}"
          onSelectedChange="{handleOrientationChange}"
          selected="{selectedOrientation}"
        >
          <Select.HiddenInput {...attrs} {...constraints} />

          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>

          <Select.Content />
        </Select.Root>
      </Form.Control>

      <Form.Description>
        {schema.shape.orientation.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Tabs.Root {...$props} value="account">
      <Tabs.List
        class="
            grid
            {$props.orientation === 'horizontal' ? 'grid-cols-2' : ''}
            {$props.orientation === 'vertical' ? 'h-auto grid-cols-1' : ''}
          "
      >
        <Tabs.Trigger value="account">Account</Tabs.Trigger>

        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>

            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>

          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>

              <Input id="name" value="Pedro Duarte" variant="text" />
            </div>

            <div class="space-y-1">
              <Label for="username">Username</Label>

              <Input id="username" value="@peduarte" variant="text" />
            </div>
          </Card.Content>

          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>

      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>

            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>

          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>

              <Input id="current" type="password" variant="text" />
            </div>

            <div class="space-y-1">
              <Label for="new">New password</Label>

              <Input id="new" type="password" variant="text" />
            </div>
          </Card.Content>

          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </svelte:fragment>
</ComponentDemoLayout>
