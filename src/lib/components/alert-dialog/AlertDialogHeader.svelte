<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The breakpoint of the header.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof styles>['breakpoint']>;
  /**
   * The props of the header.
   */
  export type Props = {
    /**
     * The breakpoint of the header.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
  };
  /**
   * The slots of the header.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the header.
   */
  export const styles = tv({
    base: ['flex flex-col gap-y-2 text-center'],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: ['sm:text-left'],
        md: ['md:text-left'],
        lg: ['lg:text-left'],
      },
    },
  });
  /**
   * The breakpoints of the header.
   */
  export const breakpoints = Object.keys(styles.variants.breakpoint) as [
    Breakpoint,
    ...Breakpoint[],
  ];
  /**
   * The default breakpoint of the header.
   */
  export const defaultBreakpoint = styles.defaultVariants.breakpoint!;
</script>

<script lang="ts">
  type $$Events = EmptyObject;
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
  data-breakpoint="{breakpoint}"
>
  <slot />
</div>
