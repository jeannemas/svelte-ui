<script context="module" lang="ts">
  import '@internationalized/date';
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

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

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    breakpoint,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The root of the calendar component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `breakpoint` - The breakpoint of the months.
- `calendarLabel` - The label of the calendar.
- `disabled` - Whether the calendar is disabled.
- `el` - Bind to the underlying DOM element of the component.
- `fixedWeeks` - Whether to always show 6 weeks.
- `initialFocus` - The initial focus of the calendar.
- `isDateDisabled` - A function to determine if a date is disabled.
- `isDateUnavailable` - A function to determine if a date is unavailable.
- `locale` - The locale of the calendar.
- `maxValue` - The maximum value of the calendar.
- `minValue` - The minimum value of the calendar.
- `multiple` - Whether the calendar allows multiple selections.
- `numberOfMonths` - The number of months to show.
- `onPlaceholderChange` - A callback to handle the placeholder change.
- `onValueChange` - A callback to handle the value change.
- `pagedNavigation` - Whether to use paged navigation.
- `placeholder` - The placeholder of the calendar.
- `preventDeselect` - Whether to prevent deselecting the value.
- `readonly` - Whether the calendar is read-only.
- `weekStartsOn` - The week starts on.
- `weekdayFormat` - The format of the weekdays.
- `value` - The value of the calendar.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
  - `months` - The months of the calendar.
  - `weekdays` - The weekdays of the calendar.

### Components hierarchy

```html
<Calendar.Root>
  <Calendar.Header>
    <Calendar.PreviousButton />

    <Calendar.Heading />

    <Calendar.NextButton />
  </Calendar.Header>

  <Calendar.Months>
    ...

    <Calendar.Grid>
      <Calendar.GridHead>
        <Calendar.GridRow>
          ...

          <Calendar.HeadCell />

          ...
        </Calendar.GridRow>
      </Calendar.GridHead>

      <Calendar.GridBody>
        ...

        <Calendar.GridRow>
          ...

          <Calendar.Cell>
            <Calendar.Day />
          </Calendar.Cell>

          ...
        </Calendar.GridRow>

        ...
      </Calendar.GridBody>
    </Calendar.Grid>

    ...
  </Calendar.Months>
</Calendar.Root>
```
-->

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
  <slot builder="{builder}" months="{months}" weekdays="{weekdays}" />
</CalendarPrimitive.Root>
