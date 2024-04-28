<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the footer.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The breakpoint of the footer.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof styles>['breakpoint']>;
  /**
   * The props of the footer.
   */
  export type Props = {
    /**
     * The breakpoint of the footer.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
  };
  /**
   * The slots of the footer.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the footer.
   */
  export const styles = tv({
    base: ['flex flex-col-reverse gap-2'],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: ['sm:flex-row sm:justify-end'],
        md: ['md:flex-row md:justify-end'],
        lg: ['lg:flex-row lg:justify-end'],
      },
    },
  });
  /**
   * The breakpoints of the footer.
   */
  export const breakpoints = Object.keys(styles.variants.breakpoint) as [
    Breakpoint,
    ...Breakpoint[],
  ];
  /**
   * The default breakpoint of the footer.
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
