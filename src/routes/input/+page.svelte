<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Input, { variants } from '$lib/components/input/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z.object({
      disabled: z.boolean().default(false).optional(),
      placeholder: z.string().default('').optional(),
      variant: z.enum(variants).default('text'),
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

    <Form.Description>Whether the input is disabled.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="placeholder" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Placeholder</Form.Label>

      <Input {...attrs} variant="text" bind:value="{$superFormData.placeholder}" />
    </Form.Control>

    <Form.Description>The input placeholder.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="variant" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Variant</Form.Label>

      <Select.Root
        items="{variants.map((variant) => ({
          label: variant,
          value: variant,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.variant = selected?.value ?? 'text';
        }}"
        portal="{null}"
        selected="{$superFormData.variant !== undefined
          ? {
              label: $superFormData.variant,
              value: $superFormData.variant,
            }
          : undefined}"
      >
        <Select.Input {...attrs} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each variants as variant, index (index)}
            <Select.Item value="{variant}">
              {variant}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The variant of the input.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<hr class="my-4 border-y border-border" />

<Input {...$superFormData} />
