<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';

  const adapter = zod(
    z.object({
      username: z.string().min(2).max(50),
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
  <Form.Field name="username" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Placeholder</Form.Label>

      <Input {...attrs} variant="text" bind:value="{$superFormData.username}" />
    </Form.Control>

    <Form.Description>This is your public display name.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>
