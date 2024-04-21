<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z.object({
      checked: z.boolean().default(false).optional(),
      disabled: z.boolean().default(false).optional(),
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
  <Form.Field name="checked" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Checked</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.checked}" />
    </Form.Control>

    <Form.Description>The checked state of the switch.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="disabled" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Disabled</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
    </Form.Control>

    <Form.Description>
      When <code>true</code>, prevents the user from interacting with the switch.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Switch disabled="{$superFormData.disabled}" bind:checked="{$superFormData.checked}" />
