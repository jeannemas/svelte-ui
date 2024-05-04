<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the grid row.
   */
  export type Attributes = SvelteHTMLElements['tr'];
  /**
   * The props of the grid row.
   */
  export type Props = Omit<CalendarPrimitive.GridRowProps, keyof Attributes>;
  /**
   * The slots of the grid row.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.GridRow>;

  /**
   * The styles of the grid row.
   */
  export const styles = tv({
    base: ['flex'],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.GridRow
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridRow>
