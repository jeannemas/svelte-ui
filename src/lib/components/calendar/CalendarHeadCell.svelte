<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CalendarPrimitive.HeadCell>;

  /**
   * The attributes of the head cell.
   */
  export type Attributes = SvelteHTMLElements['th'];
  /**
   * The props of the head cell.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the head cell.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the head cell.
   */
  export const headCellStyles = tv({
    base: ['w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.HeadCell
  {...attributes}
  asChild="{asChild}"
  class="{headCellStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.HeadCell>
