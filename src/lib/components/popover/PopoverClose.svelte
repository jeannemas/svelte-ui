<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the close.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the close.
   */
  export type Props = Omit<PopoverPrimitive.CloseProps, keyof Attributes>;
  /**
   * The slots of the close.
   */
  export type Slots = ComponentSlots<PopoverPrimitive.Close>;

  /**
   * The styles of the close.
   */
  export const styles = tv({
    base: [],
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

<PopoverPrimitive.Close
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</PopoverPrimitive.Close>
