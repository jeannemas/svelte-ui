<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.Sub>;

  /**
   * The attributes of the sub.
   */
  export type Attributes = EmptyObject;
  /**
   * The props of the sub.
   */
  export type Props = Primitive['props'];
  /**
   * The slots of the sub.
   */
  export type Slots = Primitive['slots'];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
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
