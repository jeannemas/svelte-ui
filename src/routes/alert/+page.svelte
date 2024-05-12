<script context="module" lang="ts">
  import Terminal from 'lucide-svelte/icons/terminal';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Alert from '$lib/components/alert/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';

  const adapter = zod(
    z
      .object({
        variant: z.enum(Alert.variants).default(Alert.defaultVariant),
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
  <Form.Field name="variant" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Variant</Form.Label>

      <Select.Root
        items="{Alert.variants.map((variant) => ({
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
          {#each Alert.variants as variant, index (index)}
            <Select.Item value="{variant}">
              {variant}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The variant of the alert.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Alert.Root variant="{$superFormData.variant}">
  <Terminal class="h-4 w-4" />

  <Alert.Title>Heads up!</Alert.Title>

  <Alert.Description>You can add components to your app using the cli.</Alert.Description>
</Alert.Root>
