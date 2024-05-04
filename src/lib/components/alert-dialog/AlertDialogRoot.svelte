<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = Record<never, never>;
  /**
   * The props of the root.
   */
  export type Props = AlertDialogPrimitive.Props;
  /**
   * The slots of the root.
   */
  export type Slots = ComponentSlots<AlertDialogPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let openFocus: Props['openFocus'] = undefined;
  export let portal: Props['portal'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Root
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  openFocus="{openFocus}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</AlertDialogPrimitive.Root>
