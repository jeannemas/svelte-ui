<script context="module" lang="ts">
  import type { DateValue } from '@internationalized/date';
  import { Calendar as CalendarPrimitive, type Month } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  import * as Calendar from './index.js';

  /**
   * The attributes of the calendar.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'placeholder'>;
  /**
   * The props of the calendar.
   */
  export type Props<TMultiple extends boolean = false> = Omit<
    CalendarPrimitive.Props<TMultiple>,
    keyof Attributes
  > & {
    /**
     * Callback to be called when a day is clicked.
     *
     * @param day The clicked day.
     */
    onDayClick?: (day: { date: DateValue; month: Month<DateValue> }) => unknown;
  };
  /**
   * The slots of the calendar.
   */
  export type Slots<TMultiple extends boolean = false> = ComponentSlots<
    CalendarPrimitive.Root<TMultiple>
  >;

  /**
   * The styles of the calendar.
   */
  export const styles = tv({
    base: ['p-3'],
  });
  /**
   * The week starts on values.
   */
  export const weekStartsOn = [0, 1, 2, 3, 4, 5, 6] as const satisfies Props['weekStartsOn'][];
  /**
   * The weekday format values.
   */
  export const weekdayFormats = [
    'long',
    'narrow',
    'short',
  ] as const satisfies Props['weekdayFormat'][];
</script>

<script generics="TMultiple extends boolean = false" lang="ts">
  type $$Events = CalendarPrimitive.Events;
  type $$Props = Attributes & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<TMultiple>;
  type TypedSlots = Slots<TMultiple>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let calendarLabel: TypedProps['calendarLabel'] = undefined;
  export let disabled: TypedProps['disabled'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let fixedWeeks: TypedProps['fixedWeeks'] = undefined;
  export let initialFocus: TypedProps['initialFocus'] = undefined;
  export let isDateDisabled: TypedProps['isDateDisabled'] = undefined;
  export let isDateUnavailable: TypedProps['isDateUnavailable'] = undefined;
  export let locale: TypedProps['locale'] = undefined;
  export let maxValue: TypedProps['maxValue'] = undefined;
  export let minValue: TypedProps['minValue'] = undefined;
  export let multiple: TypedProps['multiple'] = undefined;
  export let numberOfMonths: TypedProps['numberOfMonths'] = undefined;
  export let onDayClick: TypedProps['onDayClick'] = undefined;
  export let onPlaceholderChange: TypedProps['onPlaceholderChange'] = undefined;
  export let onValueChange: TypedProps['onValueChange'] = undefined;
  export let pagedNavigation: TypedProps['pagedNavigation'] = undefined;
  export let placeholder: TypedProps['placeholder'] = undefined;
  export let preventDeselect: TypedProps['preventDeselect'] = undefined;
  export let readonly: TypedProps['readonly'] = undefined;
  export let weekStartsOn: TypedProps['weekStartsOn'] = undefined;
  export let weekdayFormat: TypedProps['weekdayFormat'] = 'short';
  export let value: TypedProps['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  calendarLabel="{calendarLabel}"
  class="{styles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  fixedWeeks="{fixedWeeks}"
  initialFocus="{initialFocus}"
  isDateDisabled="{isDateDisabled}"
  isDateUnavailable="{isDateUnavailable}"
  locale="{locale}"
  maxValue="{maxValue}"
  minValue="{minValue}"
  multiple="{multiple}"
  numberOfMonths="{numberOfMonths}"
  onPlaceholderChange="{onPlaceholderChange}"
  onValueChange="{onValueChange}"
  pagedNavigation="{pagedNavigation}"
  preventDeselect="{preventDeselect}"
  readonly="{readonly}"
  weekStartsOn="{weekStartsOn}"
  weekdayFormat="{weekdayFormat}"
  bind:placeholder="{placeholder}"
  bind:value="{value}"
  let:builder
  let:months
  let:weekdays
  on:keydown
>
  <slot builder="{builder}" months="{months}" weekdays="{weekdays}">
    <Calendar.Header>
      <Calendar.PreviousButton />

      <Calendar.Heading />

      <Calendar.NextButton />
    </Calendar.Header>

    <Calendar.Months>
      {#each months as month}
        <Calendar.Grid>
          <Calendar.GridHead>
            <Calendar.GridRow class="flex">
              {#each weekdays as weekday}
                <Calendar.HeadCell>
                  {weekday.slice(0, 2)}
                </Calendar.HeadCell>
              {/each}
            </Calendar.GridRow>
          </Calendar.GridHead>

          <Calendar.GridBody>
            {#each month.weeks as weekDates}
              <Calendar.GridRow class="mt-2 w-full">
                {#each weekDates as date}
                  <Calendar.Cell date="{date}">
                    <Calendar.Day
                      date="{date}"
                      month="{month.value}"
                      on:click="{() =>
                        onDayClick?.({
                          date,
                          month,
                        })}"
                    />
                  </Calendar.Cell>
                {/each}
              </Calendar.GridRow>
            {/each}
          </Calendar.GridBody>
        </Calendar.Grid>
      {/each}
    </Calendar.Months>
  </slot>
</CalendarPrimitive.Root>
