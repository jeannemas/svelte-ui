<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';
  import Textarea from '$lib/components/textarea/index.js';

  const adapter = zod(
    z.object({
      disabled: z.boolean().default(false).optional(),
      placeholder: z.string().default('').optional(),
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
  <Form.Field name="disabled" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Disabled</Form.Label>

      <Switch {...attrs} bind:checked="{$superFormData.disabled}" />
    </Form.Control>

    <Form.Description>Whether the textarea is disabled.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="placeholder" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Placeholder</Form.Label>

      <Textarea {...attrs} bind:value="{$superFormData.placeholder}" />
    </Form.Control>

    <Form.Description>The textarea placeholder.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<hr class="my-4 border-y border-border" />

<Textarea {...$superFormData} />
