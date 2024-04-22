<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the grid head component.
   */
  export type Attributes = SvelteHTMLElements['thead'];
  /**
   * The Svelte 5 like events of the grid head component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the grid head component.
   */
  export type Props = Omit<CalendarPrimitive.GridHeadProps, keyof Attributes>;
  /**
   * The slots of the grid head component.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.GridHead>;

  /**
   * The styles of the grid head.
   */
  export const styles = tv({
    base: [],
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

<CalendarPrimitive.GridHead
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridHead>
