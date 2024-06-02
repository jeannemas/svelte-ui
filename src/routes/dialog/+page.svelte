<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Dialog from '$lib/components/dialog/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
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
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Dialog.Root {...$props}>
      <Dialog.Trigger asChild let:builder>
        <Button builders="{[builder]}" variant="outline">Edit Profile</Button>
      </Dialog.Trigger>

      <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>

          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
        </Dialog.Header>

        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label class="text-right" for="name">Name</Label>

            <Input class="col-span-3" id="name" value="Pedro Duarte" variant="text" />
          </div>

          <div class="grid grid-cols-4 items-center gap-4">
            <Label class="text-right" for="username">Username</Label>

            <Input class="col-span-3" id="username" value="@peduarte" variant="text" />
          </div>
        </div>

        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </svelte:fragment>
</ComponentDemoLayout>
