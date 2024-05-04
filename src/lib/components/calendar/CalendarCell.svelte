<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the cell.
   */
  export type Attributes = SvelteHTMLElements['td'];
  /**
   * The props of the cell.
   */
  export type Props = Omit<CalendarPrimitive.CellProps, keyof Attributes>;
  /**
   * The slots of the cell.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.Cell>;

  /**
   * The styles of the cell.
   */
  export const styles = tv({
    base: [
      'relative h-9 w-9 p-0 text-center text-sm',
      'focus-within:relative focus-within:z-20',
      '[&:has([data-selected])]:bg-accent',
      'first:[&:has([data-selected])]:rounded-l-md',
      'last:[&:has([data-selected])]:rounded-r-md',
      '[&:has([data-selected][data-outside-month])]:bg-accent/50',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let date: Props['date'];
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Cell
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  date="{date}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.Cell>
