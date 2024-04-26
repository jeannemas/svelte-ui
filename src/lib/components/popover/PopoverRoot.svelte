<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the popover component.
   */
  export type Attributes = Record<never, never>;
  /**
   * The props of the popover component.
   */
  export type Props = {
    /**
     * Whether or not to close the popover when the escape key is pressed.
     *
     * @default true
     */
    closeOnEscape?: boolean;
    /**
     * Whether or not to close the popover when the escape key is pressed.
     *
     * @default true
     */
    closeOnOutsideClick?: boolean;
    /**
     * Whether or not to disable the focus trap when the popover is open.
     *
     * @default false
     */
    disableFocusTrap?: boolean;
    /**
     * A callback function called when the open state changes.
     */
    onOpenChange?: (value: boolean) => void;
    /**
     * A custom event handler for the "outside click" event, which
     * is handled by the `document`.
     * If `event.preventDefault()` is called within the function,
     * the dialog will not close when the user clicks outside of it.
     */
    onOutsideClick?: (event: PointerEvent | MouseEvent | TouchEvent) => void;
    /**
     * The open state of the popover.
     * You can bind this to a boolean value to programmatically control the open state.
     *
     * @default false
     */
    open?: boolean;
    /**
     * If not undefined, the popover will be rendered within the provided element or selector.
     *
     * @default 'body'
     */
    portal?: HTMLElement | string | null;
    /**
     * Whether or not to prevent scrolling when the popover is open.
     *
     * @default false
     */
    preventScroll?: boolean;
  };
  /**
   * The slots of the popover component.
   */
  export type Slots = ComponentSlots<PopoverPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let disableFocusTrap: Props['disableFocusTrap'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;
  export let portal: Props['portal'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<PopoverPrimitive.Root
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  disableFocusTrap="{disableFocusTrap}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  preventScroll="{preventScroll}"
  portal="{portal}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</PopoverPrimitive.Root>
