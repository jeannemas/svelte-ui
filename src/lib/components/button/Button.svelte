<script context="module" lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the button.
   */
  export type Attributes = ButtonPrimitive.Props;
  /**
   * The props of the button.
   */
  export type Props = {
    /**
     * The size of the button.
     *
     * @default 'default'
     */
    size?: Size;
    /**
     * The variant of the button.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The size of the button.
   */
  export type Size = NonNullable<VariantProps<typeof styles>['size']>;
  /**
   * The slots of the button.
   */
  export type Slots = ComponentSlots<ButtonPrimitive.Root>;
  /**
   * The variant of the button.
   */
  export type Variant = NonNullable<VariantProps<typeof styles>['variant']>;

  /**
   * The styles of the button.
   */
  export const styles = tv({
    base: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        circular: 'aspect-square h-10 w-10 rounded-full',
        default: 'h-10 px-4 py-2',
        icon: 'aspect-square h-10 w-10',
        lg: 'h-11 rounded-md px-8',
        sm: 'h-9 rounded-md px-3',
      },
      variant: {
        default: ['bg-primary text-primary-foreground', 'hover:bg-primary/90'],
        destructive: ['bg-destructive text-destructive-foreground', 'hover:bg-destructive/90'],
        ghost: ['hover:bg-accent hover:text-accent-foreground'],
        link: ['text-primary underline-offset-4', 'hover:underline'],
        outline: [
          'border border-input bg-background',
          'hover:bg-accent hover:text-accent-foreground',
        ],
        secondary: ['bg-secondary text-secondary-foreground', 'hover:bg-secondary/80'],
      },
    },
  });
  /**
   * The default size of the button.
   */
  export const defaultSize = styles.defaultVariants.size!;
  /**
   * The default variant of the button.
   */
  export const defaultVariant = styles.defaultVariants.variant!;
  /**
   * The sizes of the button.
   */
  export const sizes = Object.keys(styles.variants.size) as [Size, ...Size[]];
  /**
   * The variants of the button.
   */
  export const variants = Object.keys(styles.variants.variant) as [Variant, ...Variant[]];
</script>

<script lang="ts">
  type $$Events = Events<ButtonPrimitive.Events>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let size: Props['size'] = undefined;
  export let variant: Props['variant'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<ButtonPrimitive.Root
  {...attributes}
  builders="{attributes.builders ?? []}"
  class="{styles({
    class: attributes.class,
    size,
    variant,
  })}"
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
