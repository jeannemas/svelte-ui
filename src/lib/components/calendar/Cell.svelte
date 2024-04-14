<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['td'];
  export type Events = Record<never, never>;
  export type Props = Omit<CalendarPrimitive.CellProps, keyof Attributes>;
  export type Slots = ComponentSlots<CalendarPrimitive.Cell>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{cn(
    'relative h-9 w-9 p-0 text-center text-sm',
    'focus-within:relative focus-within:z-20',
    '[&:has([data-selected])]:bg-accent',
    'first:[&:has([data-selected])]:rounded-l-md',
    'last:[&:has([data-selected])]:rounded-r-md',
    '[&:has([data-selected][data-outside-month])]:bg-accent/50',
    attributes.class,
  )}"
  date="{date}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.Cell>
