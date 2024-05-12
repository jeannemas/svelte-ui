<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button, {
    defaultSize,
    defaultVariant,
    sizes,
    variants,
  } from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        disabled: z.boolean().default(false),
        size: z.enum(sizes).default(defaultSize),
        variant: z.enum(variants).default(defaultVariant),
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
  <Form.Field name="disabled" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Disabled</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
    </Form.Control>

    <Form.Description>Whether the button is disabled.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="size" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Size</Form.Label>

      <Select.Root
        items="{sizes.map((size) => ({
          label: size,
          value: size,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.size = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.size !== undefined
          ? {
              label: $superFormData.size,
              value: $superFormData.size,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each sizes as size, index (index)}
            <Select.Item value="{size}">
              {size}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The size of the button.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="variant" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Variant</Form.Label>

      <Select.Root
        items="{variants.map((variant) => ({
          label: variant,
          value: variant,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.variant = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.variant !== undefined
          ? {
              label: $superFormData.variant,
              value: $superFormData.variant,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

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

    <Form.Description>The variant of the button.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Button
  disabled="{$superFormData.disabled}"
  size="{$superFormData.size}"
  variant="{$superFormData.variant}"
>
  Lorem ipsum
</Button>
