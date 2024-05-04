<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = {
    /**
     * The variant of the alert.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: Slot;
  };
  /**
   * The variant of the root.
   */
  export type Variant = NonNullable<VariantProps<typeof styles>['variant']>;

  /**
   * The styles of the root.
   */
  export const styles = tv({
    base: [
      'relative w-full rounded-lg border p-4',
      '[&:has(svg)]:pl-11',
      '[&>svg+div]:translate-y-[-3px]',
      '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    ],
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: [
          'border-destructive/50 text-destructive',
          'dark:border-destructive',
          '[&>svg]:text-destructive',
        ],
      },
    },
  });
  /**
   * The default variant of the root.
   */
  export const defaultVariant = styles.defaultVariants.variant!;
  /**
   * The variants of the root.
   */
  export const variants = Object.keys(styles.variants.variant) as [Variant, ...Variant[]];
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let variant: Props['variant'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{styles({
    class: attributes.class,
    variant,
  })}"
  role="alert"
  data-variant="{variant}"
>
  <slot />
</div>
