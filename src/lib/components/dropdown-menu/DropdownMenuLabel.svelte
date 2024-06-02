<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.Label>;

  /**
   * The attributes of the label.
   */
  export type Attributes = Primitive['props'];
  /**
   * The props of the label.
   */
  export type Props = {
    inset?: boolean;
  };
  /**
   * The slots of the label.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the label.
   */
  export const labelStyles = tv({
    base: ['px-2 py-1.5 text-sm font-semibold'],
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

  export let inset: Props['inset'] = labelStyles.defaultVariants.inset;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Label
  {...attributes}
  class="{labelStyles({
    class: attributes.class,
    inset,
  })}"
  let:builder
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.Label>
