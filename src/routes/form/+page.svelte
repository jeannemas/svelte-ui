<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter1 = zod(
    z
      .object({
        debug: z.boolean().default(false),
      })
      .partial(),
  );
  const adapter2 = zod(
    z.object({
      username: z.string().min(2).max(50),
    }),
  );
</script>

<script lang="ts">
  const superForm1 = createSuperForm(defaults(adapter1), {
    SPA: true,
    validators: adapter1,
  });
  const { form: superFormData1 } = superForm1;
  const superForm2 = createSuperForm(defaults(adapter2), {
    SPA: true,
    validators: adapter2,
  });
  const { form: superFormData2 } = superForm2;
</script>

<!-- <style lang="postcss">
</style> -->

<Form.Root superForm="{superForm1}">
  <Form.Field name="debug" superForm="{superForm1}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Debug</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData1.debug}" />
    </Form.Control>

    <Form.Description>
      Whether to display the form state in a debug panel underneath the form.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Form.Root debug="{$superFormData1.debug}" superForm="{superForm2}">
  <Form.Field name="username" superForm="{superForm2}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Placeholder</Form.Label>

      <Input {...attrs} {...constraints} variant="text" bind:value="{$superFormData2.username}" />
    </Form.Control>

    <Form.Description>This is your public display name.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>
