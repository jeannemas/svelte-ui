<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the group.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the group.
   */
  export type Props = Omit<DropdownMenuPrimitive.GroupProps, keyof Attributes>;
  /**
   * The slots of the group.
   */
  export type Slots = ComponentSlots<DropdownMenuPrimitive.Group>;

  /**
   * The styles of the group.
   */
  export const styles = tv({
    base: [],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Group
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.Group>
