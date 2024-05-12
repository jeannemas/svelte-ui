<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import { styles as buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Action>;

  /**
   * The attributes of the action.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the action.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> & {
    /**
     * The size of the action.
     *
     * @default 'default'
     */
    size?: Size;
    /**
     * The variant of the action.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The size of the action.
   */
  export type Size = NonNullable<VariantProps<typeof styles>['size']>;
  /**
   * The slots of the action.
   */
  export type Slots = Primitive['slots'];
  /**
   * The variant of the action.
   */
  export type Variant = NonNullable<VariantProps<typeof styles>['variant']>;

  /**
   * The styles of the action.
   */
  export const styles = tv({
    ...buttonStyles,
  });
  /**
   * The default size of the action.
   */
  export const defaultSize = styles.defaultVariants.size!;
  /**
   * The default variant of the action.
   */
  export const defaultVariant = styles.defaultVariants.variant!;
  /**
   * The sizes of the action.
   */
  export const sizes = Object.keys(styles.variants.size) as [Size, ...Size[]];
  /**
   * The variants of the action.
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

<AlertDialogPrimitive.Action
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
    size,
    variant,
  })}"
  el="{el}"
  data-size="{size}"
  data-variant="{variant}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Action>
