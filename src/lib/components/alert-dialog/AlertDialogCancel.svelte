<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import { styles as buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Cancel>;

  /**
   * The attributes of the cancel.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the cancel.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> & {
    /**
     * The size of the cancel.
     *
     * @default 'default'
     */
    size?: Size;
    /**
     * The variant of the cancel.
     *
     * @default 'outline'
     */
    variant?: Variant;
  };
  /**
   * The size of the cancel.
   */
  export type Size = NonNullable<VariantProps<typeof styles>['size']>;
  /**
   * The slots of the cancel.
   */
  export type Slots = Primitive['slots'];
  /**
   * The variant of the cancel.
   */
  export type Variant = NonNullable<VariantProps<typeof styles>['variant']>;

  /**
   * The styles of the cancel.
   */
  export const styles = tv({
    ...buttonStyles,
    defaultVariants: {
      ...buttonStyles.defaultVariants,
      variant: 'outline',
    },
  });
  /**
   * The default size of the cancel.
   */
  export const defaultSize = styles.defaultVariants.size!;
  /**
   * The default variant of the cancel.
   */
  export const defaultVariant = styles.defaultVariants.variant!;
  /**
   * The sizes of the cancel.
   */
  export const sizes = Object.keys(styles.variants.size) as [Size, ...Size[]];
  /**
   * The variants of the cancel.
   */
  export const variants = Object.keys(styles.variants.variant) as [Variant, ...Variant[]];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let size: Props['size'] = undefined;
  export let variant: Props['variant'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Cancel
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
    size,
    variant,
  })}"
  data-size="{size}"
  data-variant="{variant}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Cancel>
