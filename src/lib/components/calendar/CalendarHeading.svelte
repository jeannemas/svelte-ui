<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the heading.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the heading.
   */
  export type Props = Omit<CalendarPrimitive.HeadingProps, keyof Attributes>;
  /**
   * The slots of the heading.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.Heading>;

  /**
   * The styles of the heading.
   */
  export const styles = tv({
    base: ['text-sm font-medium'],
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

<CalendarPrimitive.Heading
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  let:headingValue
>
  <slot builder="{builder}" headingValue="{headingValue}">
    {headingValue}
  </slot>
</CalendarPrimitive.Heading>
