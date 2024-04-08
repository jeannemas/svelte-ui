<script context="module" lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { tv, type VariantProps } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = ButtonPrimitive.Props;
  export type Events = Record<never, never>;
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
  export type Size = NonNullable<VariantProps<typeof variants>['size']>;
  export type Variant = NonNullable<VariantProps<typeof variants>['variant']>;

  export const variants = tv({
    base: [
      'inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        circular: 'h-10 w-10 rounded-full aspect-square',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10 aspect-square',
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
</script>

<script lang="ts">
  type $$Events = ButtonPrimitive.Events;
  type $$Props = Attributes & Events & Props;
  type $$Slots = {
    default: Record<never, never>;
  };

  export let size: Props['size'] = 'default';
  export let variant: Props['variant'] = 'default';

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<ButtonPrimitive.Root
  {...attributes}
  builders="{attributes.builders ?? []}"
  class="{cn(
    variants({
      class: attributes.class,
      size,
      variant,
    }),
  )}"
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
