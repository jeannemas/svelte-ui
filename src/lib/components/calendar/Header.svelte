<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the header component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the header component.
   */
  export type Props = Omit<CalendarPrimitive.HeaderProps, keyof Attributes>;
  /**
   * The slots of the header component.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.Header>;

  /**
   * The styles of the header.
   */
  export const styles = tv({
    base: ['relative flex w-full items-center justify-between pt-1'],
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

<CalendarPrimitive.Header
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.Header>
