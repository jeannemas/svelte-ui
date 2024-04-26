<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the head cell component.
   */
  export type Attributes = SvelteHTMLElements['th'];
  /**
   * The props of the head cell component.
   */
  export type Props = Omit<CalendarPrimitive.HeadCellProps, keyof Attributes>;
  /**
   * The slots of the head cell component.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.HeadCell>;

  /**
   * The styles of the head cell.
   */
  export const styles = tv({
    base: ['w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
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
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.HeadCell>
