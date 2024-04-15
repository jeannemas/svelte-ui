<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Record<never, never>;
  export type Events = Pick<PopoverPrimitive.Props, 'onOpenChange' | 'onOutsideClick'>;
  export type Props = Omit<PopoverPrimitive.Props, 'onOpenChange' | 'onOutsideClick'>;
  export type Slots = ComponentSlots<PopoverPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let disableFocusTrap: Props['disableFocusTrap'] = undefined;
  export let onOpenChange: Events['onOpenChange'] = undefined;
  export let onOutsideClick: Events['onOutsideClick'] = undefined;
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
