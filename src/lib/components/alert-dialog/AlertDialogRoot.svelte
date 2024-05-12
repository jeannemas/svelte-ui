<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Root>;

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
