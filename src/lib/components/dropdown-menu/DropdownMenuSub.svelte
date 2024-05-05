<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the sub.
   */
  export type Attributes = Record<never, never>;
  /**
   * The props of the sub.
   */
  export type Props = DropdownMenuPrimitive.SubProps;
  /**
   * The slots of the sub.
   */
  export type Slots = ComponentSlots<DropdownMenuPrimitive.Sub>;
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let disabled: Props['disabled'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let open: Props['open'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Sub
  disabled="{disabled}"
  onOpenChange="{onOpenChange}"
  bind:open="{open}"
  let:subIds
>
  <slot subIds="{subIds}" />
</DropdownMenuPrimitive.Sub>
