<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the grid component.
   */
  export type Attributes = SvelteHTMLElements['table'];
  /**
   * The Svelte 5 like events of the grid component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the grid component.
   */
  export type Props = Omit<CalendarPrimitive.GridProps, keyof Attributes>;
  /**
   * The slots of the grid component.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.Grid>;

  /**
   * The styles of the grid.
   */
  export const styles = tv({
    base: ['w-full border-collapse space-y-1'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Grid
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</CalendarPrimitive.Grid>
