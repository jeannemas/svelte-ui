<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Header>;

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the header.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the header.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the header.
   */
  export const styles = tv({
    base: ['relative flex w-full items-center justify-between pt-1'],
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
