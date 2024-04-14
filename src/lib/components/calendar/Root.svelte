<script context="module" lang="ts">
  import type { DateValue } from '@internationalized/date';
  import { Calendar as CalendarPrimitive, type Month } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';

  import type { ComponentSlots } from '$lib/utils/types.js';
  import * as Calendar from './index.js';

  export type Attributes = Omit<SvelteHTMLElements['div'], 'placeholder'>;
  export type Events<TMultiple extends boolean = false> = {
    onDayClick?: (day: { date: DateValue; month: Month<DateValue> }) => unknown;
  } & Pick<CalendarPrimitive.Props<TMultiple>, 'onPlaceholderChange' | 'onValueChange'>;
  export type Props<TMultiple extends boolean = false> = Omit<
    CalendarPrimitive.Props<TMultiple>,
    keyof Attributes | 'onPlaceholderChange' | 'onValueChange'
  >;
  export type Slots<TMultiple extends boolean = false> = ComponentSlots<
    CalendarPrimitive.Root<TMultiple>
  >;
</script>

<script lang="ts" generics="TMultiple extends boolean = false">
  type $$Events = CalendarPrimitive.Events;
  type $$Props = Attributes & TypedEvents & TypedProps;
  type $$Slots = Slots<TMultiple>;
  type TypedEvents = Events<TMultiple>;
  type TypedProps = Props<TMultiple>;

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
  export let onDayClick: TypedEvents['onDayClick'] = undefined;
  export let onPlaceholderChange: TypedEvents['onPlaceholderChange'] = undefined;
  export let onValueChange: TypedEvents['onValueChange'] = undefined;
  export let pagedNavigation: TypedProps['pagedNavigation'] = undefined;
  export let placeholder: TypedProps['placeholder'] = undefined;
  export let preventDeselect: TypedProps['preventDeselect'] = undefined;
  export let readonly: TypedProps['readonly'] = undefined;
  export let weekdayFormat: TypedProps['weekdayFormat'] = 'short';
  export let weekStartsOn: TypedProps['weekStartsOn'] = undefined;
  export let value: TypedProps['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  calendarLabel="{calendarLabel}"
  class="{cn('p-3', attributes.class)}"
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
  weekdayFormat="{weekdayFormat}"
  weekStartsOn="{weekStartsOn}"
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
