<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button from '$lib/components/button/index.js';
  import * as Dialog from '$lib/components/dialog/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        closeOnEscape: z.boolean().default(true),
        closeOnOutsideClick: z.boolean().default(true),
        open: z.boolean().default(false),
        preventScroll: z.boolean().default(true),
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
</script>

<!-- <style lang="postcss">
</style> -->

<Form.Root superForm="{superForm}">
  <Form.Field name="closeOnEscape" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on escape</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnEscape}" />
    </Form.Control>

    <Form.Description>
      If true, the dialog will close when the user presses the escape key.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="closeOnOutsideClick" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on outside click</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnOutsideClick}" />
    </Form.Control>

    <Form.Description>
      If true, the dialog will close when the user clicks outside of it.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="open" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Open</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
    </Form.Control>

    <Form.Description>
      The open state of the Dialog. You can bind to this value to programatically open/close the
      Dialog.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="preventScroll" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Prevent scroll</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventScroll}" />
    </Form.Control>

    <Form.Description>
      If true, the dialog will prevent scrolling on the body when it is open.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Dialog.Root
  closeOnEscape="{$superFormData.closeOnEscape}"
  closeOnOutsideClick="{$superFormData.closeOnOutsideClick}"
  preventScroll="{$superFormData.preventScroll}"
  bind:open="{$superFormData.open}"
>
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
