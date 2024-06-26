<script context="module" lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<ButtonPrimitive.Root>;

  /**
   * The attributes of the button.
   */
  export type Attributes = Primitive['props'];
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
  export type Size = NonNullable<VariantProps<typeof rootStyles>['size']>;
  /**
   * The slots of the button.
   */
  export type Slots = Primitive['slots'];
  /**
   * The variant of the button.
   */
  export type Variant = NonNullable<VariantProps<typeof rootStyles>['variant']>;

  /**
   * The styles of the button.
   */
  export const rootStyles = tv({
    base: [
      'inline-flex flex-row items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        circular: 'aspect-square size-10 rounded-full',
        default: 'h-10 px-4 py-2',
        icon: 'aspect-square size-10',
        lg: 'h-12 rounded-md px-8',
        sm: 'h-8 rounded-md px-3',
      },
      variant: {
        danger: ['bg-red-500 text-slate-50', 'hover:bg-red-400'],
        default: ['bg-primary text-primary-foreground', 'hover:bg-primary/90'],
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
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let size: Props['size'] = rootStyles.defaultVariants.size;
  export let variant: Props['variant'] = rootStyles.defaultVariants.variant;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    size,
    variant,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ButtonPrimitive.Root
  {...attributes}
  class="{rootStyles({
    class: attributes.class,
    size,
    variant,
  })}"
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
