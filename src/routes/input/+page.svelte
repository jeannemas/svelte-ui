<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input, { variants, type Variant } from '$lib/components/input/index.js';
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

  function handleSelectedChange(selected: Selected<Variant> | undefined) {
    $superFormData.variant = selected!.value;
  }
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{superForm}">
        <Form.Field name="disabled" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disabled</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
          </Form.Control>

          <Form.Description>Whether the input is disabled.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="placeholder" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Placeholder</Form.Label>

            <Input
              {...attrs}
              {...constraints}
              variant="text"
              bind:value="{$superFormData.placeholder}"
            />
          </Form.Control>

          <Form.Description>The input placeholder.</Form.Description>

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
              onSelectedChange="{handleSelectedChange}"
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

          <Form.Description>The variant of the input.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Input {...$superFormData} />
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
