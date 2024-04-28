<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the months.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The breakpoint of the months.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof styles>['breakpoint']>;
  /**
   * The props of the months.
   */
  export type Props = {
    /**
     * The breakpoint of the months.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
  };
  /**
   * The slots of the months.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the months.
   */
  export const styles = tv({
    base: ['mt-4 flex flex-col space-y-4'],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: ['sm:flex-row sm:space-x-4 sm:space-y-0'],
        md: ['md:flex-row md:space-x-4 md:space-y-0'],
        lg: ['lg:flex-row lg:space-x-4 lg:space-y-0'],
      },
    },
  });
  /**
   * The breakpoints of the months.
   */
  export const breakpoints = Object.keys(styles.variants.breakpoint) as [
    Breakpoint,
    ...Breakpoint[],
  ];
  /**
   * The default breakpoint of the months.
   */
  export const defaultBreakpoint = styles.defaultVariants.breakpoint!;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{styles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</div>
