<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = Record<never, never>;
  /**
   * The props of the root.
   */
  export type Props = PopoverPrimitive.Props;
  /**
   * The slots of the root.
   */
  export type Slots = ComponentSlots<PopoverPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let disableFocusTrap: Props['disableFocusTrap'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let openFocus: Props['openFocus'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;
  export let portal: Props['portal'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<PopoverPrimitive.Root
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  disableFocusTrap="{disableFocusTrap}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  openFocus="{openFocus}"
  preventScroll="{preventScroll}"
  portal="{portal}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</PopoverPrimitive.Root>
