<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Calendar from '$lib/components/calendar/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        disabled: z.boolean().default(false),
        fixedWeeks: z.boolean().default(false),
        numberOfMonths: z.number().int().min(1).default(1),
        pagedNavigation: z.boolean().default(false),
        preventDeselect: z.boolean().default(false),
        readonly: z.boolean().default(false),
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
          .default(0),
        weekdayFormat: z.enum(['long', 'narrow', 'short']).default('narrow'),
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

    <Form.Description>
      Whether the calendar is disabled. When true, the user will not be able to focus or select
      dates.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="fixedWeeks" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Fixed weeks</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.fixedWeeks}" />
    </Form.Control>

    <Form.Description>
      Display 6 weeks per month, regardless the month's number of weeks. This is useful for
      displaying a consistent calendar, where the size of the calendar doesn't change month to
      month.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="numberOfMonths" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Number of months</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        variant="number"
        bind:value="{$superFormData.numberOfMonths}"
      />
    </Form.Control>

    <Form.Description>
      Determines the number of months to display on the calendar simultaneously.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="pagedNavigation" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Paged navigation</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.pagedNavigation}" />
    </Form.Control>

    <Form.Description>
      <p>Applicable only when numberOfMonths is greater than 1.</p>

      <p>
        Controls whether to use paged navigation for the next and previous buttons in the date
        picker. With paged navigation set to true, clicking the next/prev buttons changes all months
        in view. When set to false, it shifts the view by a single month.
      </p>

      <p>
        For example, with pagedNavigation set to true and 2 months displayed (January and February),
        clicking the next button changes the view to March and April. If pagedNavigation is false,
        the view shifts to February and March.
      </p>
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="preventDeselect" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Prevent deselect</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventDeselect}" />
    </Form.Control>

    <Form.Description>
      Prevent deselecting the selected date(s), which would set the value to undefined. You can use
      this to ensure a date is always selected in certain situations.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="readonly" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Readonly</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.readonly}" />
    </Form.Control>

    <Form.Description>
      Whether the calendar is readonly. When true, the user will be able to focus and navigate the
      calendar, but will not be able to select dates.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="weekStartsOn" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Week starts on</Form.Label>

      <Select.Root
        items="{Calendar.rootWeekStartsOn.map((weekStartsOn) => ({
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
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each Calendar.rootWeekStartsOn as weekStartsOn, index (index)}
            <Select.Item value="{weekStartsOn}">
              {weekStartsOn}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>
      The day of the week to start the calendar on, which must be a number between 0 and 6, where 0
      is Sunday and 6 is Saturday.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="weekdayFormat" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Weekday format</Form.Label>

      <Select.Root
        items="{Calendar.rootWeekdayFormats.map((weekdayFormat) => ({
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
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each Calendar.rootWeekdayFormats as weekdayFormat, index (index)}
            <Select.Item value="{weekdayFormat}">
              {weekdayFormat}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>
      How the string representation of the weekdays provided via the weekdays state store should be
      formatted.

      <ul class="list-inside list-disc">
        <li>"long": "Sunday", "Monday", "Tuesday", etc.</li>

        <li>"short": "Sun", "Mon", "Tue", etc.</li>

        <li>"narrow": "S", "M", "T", etc.</li>
      </ul>
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Calendar.Root
  class="inline-block rounded-md border border-border"
  disabled="{$superFormData.disabled}"
  fixedWeeks="{$superFormData.fixedWeeks}"
  numberOfMonths="{$superFormData.numberOfMonths}"
  pagedNavigation="{$superFormData.pagedNavigation}"
  preventDeselect="{$superFormData.preventDeselect}"
  readonly="{$superFormData.readonly}"
  weekStartsOn="{$superFormData.weekStartsOn}"
  weekdayFormat="{$superFormData.weekdayFormat}"
/>
