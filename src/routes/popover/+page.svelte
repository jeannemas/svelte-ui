<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Popover from '$lib/components/popover/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z.object({
      closeOnEscape: z.boolean().default(true).optional(),
      closeOnOutsideClick: z.boolean().default(true).optional(),
      disableFocusTrap: z.boolean().default(false).optional(),
      open: z.boolean().default(false).optional(),
      preventScroll: z.boolean().default(false).optional(),
    }),
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
      Whether or not to close the popover when the escape key is pressed.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="closeOnOutsideClick" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on outside click</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnOutsideClick}" />
    </Form.Control>

    <Form.Description>
      Whether or not to close the popover when the escape key is pressed.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="disableFocusTrap" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Disable focus trap</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disableFocusTrap}" />
    </Form.Control>

    <Form.Description>
      Whether or not to disable the focus trap when the popover is open.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="open" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Open</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
    </Form.Control>

    <Form.Description>The open state of the popover.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="preventScroll" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Prevent scroll</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventScroll}" />
    </Form.Control>

    <Form.Description>
      Whether or not to prevent scrolling when the popover is open.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Popover.Root
  closeOnEscape="{$superFormData.closeOnEscape}"
  closeOnOutsideClick="{$superFormData.closeOnOutsideClick}"
  disableFocusTrap="{$superFormData.disableFocusTrap}"
  portal="{null}"
  preventScroll="{$superFormData.preventScroll}"
  bind:open="{$superFormData.open}"
>
  <Popover.Trigger asChild let:builder>
    <Button builders="{[builder]}" variant="outline">Open</Button>
  </Popover.Trigger>

  <Popover.Content>
    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>

        <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
      </div>

      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <Label for="width">Width</Label>

          <Input class="col-span-2 h-8" id="width" value="100%" variant="text" />
        </div>

        <div class="grid grid-cols-3 items-center gap-4">
          <Label for="maxWidth">Max. width</Label>

          <Input class="col-span-2 h-8" id="maxWidth" value="300px" variant="text" />
        </div>

        <div class="grid grid-cols-3 items-center gap-4">
          <Label for="height">Height</Label>

          <Input class="col-span-2 h-8" id="height" value="25px" variant="text" />
        </div>

        <div class="grid grid-cols-3 items-center gap-4">
          <Label for="maxHeight">Max. height</Label>

          <Input class="col-span-2 h-8" id="maxHeight" value="none" variant="text" />
        </div>
      </div>
    </div>
  </Popover.Content>
</Popover.Root>
