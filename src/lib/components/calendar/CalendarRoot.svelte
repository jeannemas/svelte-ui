<script context="module" lang="ts">
  import type { DateValue } from '@internationalized/date';
  import { Calendar as CalendarPrimitive, type Month } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import CalendarCell, {
    type Attributes as CalendarCellAttributes,
    type Props as CalendarCellProps,
  } from './CalendarCell.svelte';
  import CalendarDay, {
    type Attributes as CalendarDayAttributes,
    type Props as CalendarDayProps,
  } from './CalendarDay.svelte';
  import CalendarGrid, {
    type Attributes as CalendarGridAttributes,
    type Props as CalendarGridProps,
  } from './CalendarGrid.svelte';
  import CalendarGridBody, {
    type Attributes as CalendarGridBodyAttributes,
    type Props as CalendarGridBodyProps,
  } from './CalendarGridBody.svelte';
  import CalendarGridHead, {
    type Attributes as CalendarGridHeadAttributes,
    type Props as CalendarGridHeadProps,
  } from './CalendarGridHead.svelte';
  import CalendarGridRow, {
    type Attributes as CalendarGridRowAttributes,
    type Props as CalendarGridRowProps,
  } from './CalendarGridRow.svelte';
  import CalendarHeadCell, {
    type Attributes as CalendarHeadCellAttributes,
    type Props as CalendarHeadCellProps,
  } from './CalendarHeadCell.svelte';
  import CalendarHeader, {
    type Attributes as CalendarHeaderAttributes,
    type Props as CalendarHeaderProps,
  } from './CalendarHeader.svelte';
  import CalendarHeading, {
    type Attributes as CalendarHeadingAttributes,
    type Props as CalendarHeadingProps,
  } from './CalendarHeading.svelte';
  import CalendarMonths, {
    type Attributes as CalendarMonthsAttributes,
    type Props as CalendarMonthsProps,
  } from './CalendarMonths.svelte';
  import CalendarNextButton, {
    type Attributes as CalendarNextButtonAttributes,
    type Props as CalendarNextButtonProps,
  } from './CalendarNextButton.svelte';
  import CalendarPreviousButton, {
    type Attributes as CalendarPreviousButtonAttributes,
    type Props as CalendarPreviousButtonProps,
  } from './CalendarPreviousButton.svelte';
  import { rootContext } from './context.js';

  type Primitive<TMultiple extends boolean = false> = ComponentInfo<
    CalendarPrimitive.Root<TMultiple>
  >;

  /**
   * The attributes of the calendar.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'placeholder'>;
  /**
   * The breakpoint of the calendar.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof rootStyles>['breakpoint']>;
  /**
   * The props of the calendar.
   */
  export type Props<TMultiple extends boolean = false> = Omit<
    Primitive<TMultiple>['props'],
    keyof Attributes
  > & {
    /**
     * The breakpoint of the months.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
    /**
     * Callback to be called when a day is clicked.
     *
     * @param day The clicked day.
     */
    onDayClick?: (day: { date: DateValue; month: Month<DateValue> }) => unknown;
  } & {
    cellAttributesAndProps?: CalendarCellAttributes & CalendarCellProps;
    dayAttributesAndProps?: CalendarDayAttributes & CalendarDayProps;
    gridAttributesAndProps?: CalendarGridAttributes & CalendarGridProps;
    gridBodyAttributesAndProps?: CalendarGridBodyAttributes & CalendarGridBodyProps;
    gridHeadAttributesAndProps?: CalendarGridHeadAttributes & CalendarGridHeadProps;
    gridRowAttributesAndProps?: CalendarGridRowAttributes & CalendarGridRowProps;
    headCellAttributesAndProps?: CalendarHeadCellAttributes & CalendarHeadCellProps;
    headerAttributesAndProps?: CalendarHeaderAttributes & CalendarHeaderProps;
    headingAttributesAndProps?: CalendarHeadingAttributes & CalendarHeadingProps;
    monthsAttributesAndProps?: CalendarMonthsAttributes & CalendarMonthsProps;
    nextButtonAttributesAndProps?: CalendarNextButtonAttributes & CalendarNextButtonProps;
    previousButtonAttributesAndProps?: CalendarPreviousButtonAttributes &
      CalendarPreviousButtonProps;
  };
  /**
   * The slots of the calendar.
   */
  export type Slots<TMultiple extends boolean = false> = Primitive<TMultiple>['slots'];

  /**
   * The styles of the calendar.
   */
  export const rootStyles = tv({
    base: ['inline-block p-2'],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: [''],
        md: [''],
        lg: [''],
      },
    },
  });
</script>

<script generics="TMultiple extends boolean = false" lang="ts">
  type $$Events = Primitive<TMultiple>['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TMultiple>;
  type TypedProps = Props<TMultiple>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let breakpoint: TypedProps['breakpoint'] = rootStyles.defaultVariants.breakpoint;
  export let calendarLabel: TypedProps['calendarLabel'] = undefined;
  export let cellAttributesAndProps: TypedProps['cellAttributesAndProps'] = undefined;
  export let dayAttributesAndProps: TypedProps['dayAttributesAndProps'] = undefined;
  export let disabled: TypedProps['disabled'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let fixedWeeks: TypedProps['fixedWeeks'] = undefined;
  export let gridAttributesAndProps: TypedProps['gridAttributesAndProps'] = undefined;
  export let gridBodyAttributesAndProps: TypedProps['gridBodyAttributesAndProps'] = undefined;
  export let gridHeadAttributesAndProps: TypedProps['gridHeadAttributesAndProps'] = undefined;
  export let gridRowAttributesAndProps: TypedProps['gridRowAttributesAndProps'] = undefined;
  export let headCellAttributesAndProps: TypedProps['headCellAttributesAndProps'] = undefined;
  export let headerAttributesAndProps: TypedProps['headerAttributesAndProps'] = undefined;
  export let headingAttributesAndProps: TypedProps['headingAttributesAndProps'] = undefined;
  export let initialFocus: TypedProps['initialFocus'] = undefined;
  export let isDateDisabled: TypedProps['isDateDisabled'] = undefined;
  export let isDateUnavailable: TypedProps['isDateUnavailable'] = undefined;
  export let locale: TypedProps['locale'] = undefined;
  export let maxValue: TypedProps['maxValue'] = undefined;
  export let minValue: TypedProps['minValue'] = undefined;
  export let monthsAttributesAndProps: TypedProps['monthsAttributesAndProps'] = undefined;
  export let multiple: TypedProps['multiple'] = undefined;
  export let nextButtonAttributesAndProps: TypedProps['nextButtonAttributesAndProps'] = undefined;
  export let numberOfMonths: TypedProps['numberOfMonths'] = undefined;
  export let onDayClick: TypedProps['onDayClick'] = undefined;
  export let onPlaceholderChange: TypedProps['onPlaceholderChange'] = undefined;
  export let onValueChange: TypedProps['onValueChange'] = undefined;
  export let pagedNavigation: TypedProps['pagedNavigation'] = undefined;
  export let placeholder: TypedProps['placeholder'] = undefined;
  export let preventDeselect: TypedProps['preventDeselect'] = undefined;
  export let previousButtonAttributesAndProps: TypedProps['previousButtonAttributesAndProps'] =
    undefined;
  export let readonly: TypedProps['readonly'] = undefined;
  export let weekStartsOn: TypedProps['weekStartsOn'] = undefined;
  export let weekdayFormat: TypedProps['weekdayFormat'] = 'short';
  export let value: TypedProps['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($rootCtx) => ({
    ...$rootCtx,
    breakpoint,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  calendarLabel="{calendarLabel}"
  class="{rootStyles({
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
    <CalendarHeader {...headerAttributesAndProps}>
      <CalendarPreviousButton {...previousButtonAttributesAndProps} />

      <CalendarHeading {...headingAttributesAndProps} />

      <CalendarNextButton {...nextButtonAttributesAndProps} />
    </CalendarHeader>

    <CalendarMonths {...monthsAttributesAndProps}>
      {#each months as month}
        <CalendarGrid {...gridAttributesAndProps}>
          <CalendarGridHead {...gridHeadAttributesAndProps}>
            <CalendarGridRow {...gridRowAttributesAndProps}>
              {#each weekdays as weekday}
                <CalendarHeadCell {...headCellAttributesAndProps}>
                  {weekday.slice(0, 2)}
                </CalendarHeadCell>
              {/each}
            </CalendarGridRow>
          </CalendarGridHead>

          <CalendarGridBody {...gridBodyAttributesAndProps}>
            {#each month.weeks as weekDates}
              <CalendarGridRow
                {...gridRowAttributesAndProps}
                class="{cn('mt-2 w-full', gridRowAttributesAndProps?.class)}"
              >
                {#each weekDates as date}
                  <CalendarCell {...cellAttributesAndProps} date="{date}">
                    <CalendarDay
                      {...dayAttributesAndProps}
                      date="{date}"
                      month="{month.value}"
                      on:click="{() =>
                        onDayClick?.({
                          date,
                          month,
                        })}"
                    />
                  </CalendarCell>
                {/each}
              </CalendarGridRow>
            {/each}
          </CalendarGridBody>
        </CalendarGrid>
      {/each}
    </CalendarMonths>
  </slot>
</CalendarPrimitive.Root>
