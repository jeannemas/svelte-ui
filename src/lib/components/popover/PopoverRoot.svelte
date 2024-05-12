<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<PopoverPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = EmptyObject;
  /**
   * The props of the root.
   */
  export type Props = Primitive['props'];
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
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
