<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the popover close component.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The Svelte 5 like events of the popover close component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the popover close component.
   */
  export type Props = Omit<PopoverPrimitive.CloseProps, keyof Attributes>;
  /**
   * The slots of the popover close component.
   */
  export type Slots = ComponentSlots<PopoverPrimitive.Close>;

  /**
   * The styles of the popover close.
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
