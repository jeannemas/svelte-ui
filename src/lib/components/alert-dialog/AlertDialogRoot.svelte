<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = EmptyObject;
  /**
   * The breakpoint of the root.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof rootStyles>['breakpoint']>;
  /**
   * The props of the root.
   */
  export type Props = Primitive['props'] & {
    /**
     * The breakpoint of the alert dialog.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
    /**
     * The variant of the alert dialog.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];
  /**
   * The variant of the root.
   */
  export type Variant = NonNullable<VariantProps<typeof rootStyles>['variant']>;

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: [''],
    defaultVariants: {
      breakpoint: 'sm',
      variant: 'default',
    },
    variants: {
      breakpoint: {
        sm: [''],
        md: [''],
        lg: [''],
      },
      variant: {
        default: [''],
        destructive: [''],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = rootStyles.defaultVariants.breakpoint;
  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let openFocus: Props['openFocus'] = undefined;
  export let portal: Props['portal'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;
  export let variant: Props['variant'] = rootStyles.defaultVariants.variant;

  // $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($rootCtx) => ({
    ...$rootCtx,
    breakpoint,
    variant,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Root
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  openFocus="{openFocus}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</AlertDialogPrimitive.Root>
