<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { cellContext, gridRowContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Cell>;

  /**
   * The attributes of the cell.
   */
  export type Attributes = SvelteHTMLElements['td'];
  /**
   * The props of the cell.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the cell.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the cell.
   */
  export const cellStyles = tv({
    base: [
      'relative size-8 p-0 text-center text-sm',
      'focus-within:relative focus-within:z-20',
      '[&:has([data-selected])]:bg-accent',
      'first:[&:has([data-selected])]:rounded-l-md',
      'last:[&:has([data-selected])]:rounded-r-md',
      '[&:has([data-selected][data-outside-month])]:bg-accent/50',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let date: Props['date'];
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const gridRowCtx = gridRowContext.get();

  if (!gridRowCtx) {
    throw new Error('Calendar.Cell must be used within a Calendar.GridRow component.');
  }

  const cellCtx = cellContext.set(writable());

  $: cellCtx.update(($ctx) => ({
    ...$ctx,
    ...$gridRowCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

A cell of a month inside a calendar component.

Must be used within a `Calendar.GridRow` component.

### Attributes

Accepts the attributes of a `td` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `date` - The date value of the cell.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `attrs` - The attributes of the cell.
-->

<CalendarPrimitive.Cell
  {...attributes}
  asChild="{asChild}"
  class="{cellStyles({
    class: attributes.class,
  })}"
  date="{date}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.Cell>
