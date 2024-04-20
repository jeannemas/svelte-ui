<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Calendar from '$lib/components/calendar/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z.object({
      disabled: z.boolean().default(false).optional(),
      weekdayFormat: z.enum(['long', 'narrow', 'short']).default('narrow').optional(),
      weekStartsOn: z
        .union([
          z.literal(0),
          z.literal(1),
          z.literal(2),
          z.literal(3),
          z.literal(4),
          z.literal(5),
          z.literal(6),
        ])
        .default(0)
        .optional(),
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

    <Form.Description>Whether the calendar is disabled.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="weekStartsOn" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Week starts on</Form.Label>

      <Select.Root
        items="{Calendar.weekStartsOn.map((weekStartsOn) => ({
          label: weekStartsOn.toString(),
          value: weekStartsOn,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.weekStartsOn = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.weekStartsOn !== undefined
          ? {
              label: $superFormData.weekStartsOn.toString(),
              value: $superFormData.weekStartsOn,
            }
          : undefined}"
      >
        <Select.Input {...attrs} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each Calendar.weekStartsOn as weekStartsOn, index (index)}
            <Select.Item value="{weekStartsOn}">
              {weekStartsOn}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The index of the first day of the week.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="weekdayFormat" superForm="{superForm}">
    <Form.Control let:attrs>
      <Form.Label>Weekday format</Form.Label>

      <Select.Root
        items="{Calendar.weekdayFormats.map((weekdayFormat) => ({
          label: weekdayFormat,
          value: weekdayFormat,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.weekdayFormat = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.weekdayFormat !== undefined
          ? {
              label: $superFormData.weekdayFormat,
              value: $superFormData.weekdayFormat,
            }
          : undefined}"
      >
        <Select.Input {...attrs} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each Calendar.weekdayFormats as weekdayFormat, index (index)}
            <Select.Item value="{weekdayFormat}">
              {weekdayFormat}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The format of the weekdays.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<hr class="my-4 border-y border-border" />

<Calendar.Root {...$superFormData} class="inline-block rounded-md border border-border" />
