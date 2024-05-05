<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the item.
   */
  export type Attributes = DropdownMenuPrimitive.ItemProps;
  /**
   * The inset of the item.
   */
  export type Inset = NonNullable<VariantProps<typeof styles>['inset']>;
  /**
   * The props of the item.
   */
  export type Props = {
    inset?: boolean;
  };
  /**
   * The slots of the item.
   */
  export type Slots = ComponentSlots<DropdownMenuPrimitive.Item>;

  /**
   * The styles of the item.
   */
  export const styles = tv({
    base: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
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
  /**
   * The default inset of the item.
   */
  export const defaultInset = styles.defaultVariants.inset!;
  /**
   * The insets of the item.
   */
  export const insets = Object.keys(styles.variants.inset) as unknown as [Inset, ...Inset[]];
</script>

<script lang="ts">
  type $$Events = Events<DropdownMenuPrimitive.ItemEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let inset: Props['inset'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Item
  {...attributes}
  class="{styles({
    class: attributes.class,
    inset,
  })}"
  data-inset="{inset}"
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
