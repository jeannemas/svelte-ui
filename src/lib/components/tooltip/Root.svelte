<script context="module" lang="ts">
  import { Tooltip as TooltipPrimitive } from 'bits-ui';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the tooltip root.
   */
  export type Attributes = Record<never, never>;
  /**
   * The Svelte 5 like events of the tooltip root.
   */
  export type Events = Pick<TooltipPrimitive.Props, 'onOpenChange'>;
  /**
   * The props of the tooltip root.
   */
  export type Props = Omit<TooltipPrimitive.Props, keyof Events>;
  /**
   * The slots of the tooltip root.
   */
  export type Slots = ComponentSlots<TooltipPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let closeDelay: Props['closeDelay'] = 0;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnPointerDown: Props['closeOnPointerDown'] = undefined;
  export let disableHoverableContent: Props['disableHoverableContent'] = undefined;
  export let group: Props['group'] = undefined;
  export let open: Props['open'] = undefined;
  export let openDelay: Props['openDelay'] = 0;
  export let portal: Props['portal'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TooltipPrimitive.Root
  closeDelay="{closeDelay}"
  closeOnEscape="{closeOnEscape}"
  closeOnPointerDown="{closeOnPointerDown}"
  disableHoverableContent="{disableHoverableContent}"
  group="{group}"
  openDelay="{openDelay}"
  portal="{portal}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</TooltipPrimitive.Root>
