<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator, { defaultOrientation, orientations } from '$lib/components/separator/index.js';

  const adapter = zod(
    z.object({
      orientation: z.enum(orientations).default(defaultOrientation).optional(),
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
  <Form.Field name="orientation" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Orientation</Form.Label>

      <Select.Root
        items="{orientations.map((orientation) => ({
          label: orientation,
          value: orientation,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.orientation = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.orientation !== undefined
          ? {
              label: $superFormData.orientation,
              value: $superFormData.orientation,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each orientations as orientation, index (index)}
            <Select.Item value="{orientation}">
              {orientation}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The orientation of the separator.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<div
  class="flex h-5 items-center text-sm"
  class:flex-col="{$superFormData.orientation === 'horizontal'}"
  class:flex-row="{$superFormData.orientation === 'vertical'}"
>
  <div>Foo</div>

  <Separator orientation="{$superFormData.orientation}" />

  <div>Bar</div>

  <Separator orientation="{$superFormData.orientation}" />

  <div>Baz</div>
</div>
