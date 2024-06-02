<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.Item>;

  /**
   * The attributes of the item.
   */
  export type Attributes = Primitive['props'];
  /**
   * The props of the item.
   */
  export type Props = {
    inset?: boolean;
  };
  /**
   * The slots of the item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: [
      'relative flex cursor-default select-none flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
    ],
    defaultVariants: {
      inset: false,
    },
    variants: {
      inset: {
        true: ['pl-8'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let inset: Props['inset'] = itemStyles.defaultVariants.inset;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Item
  {...attributes}
  class="{itemStyles({
    class: attributes.class,
    inset,
  })}"
  let:builder
  on:click
  on:focusin
  on:focusout
  on:keydown
  on:pointerdown
  on:pointerenter
  on:pointerleave
  on:pointermove
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.Item>
