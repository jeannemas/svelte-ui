<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Grid>;

  /**
   * The attributes of the grid.
   */
  export type Attributes = SvelteHTMLElements['table'];
  /**
   * The props of the grid.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the grid.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the grid.
   */
  export const styles = tv({
    base: ['w-full border-collapse space-y-1'],
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
