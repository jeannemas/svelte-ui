<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the list.
   */
  export type Attributes = SvelteHTMLElements['ol'];
  /**
   * The breakpoint of the list.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof styles>['breakpoint']>;
  /**
   * The props of the list.
   */
  export type Props = (
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLOListElement;
      }
  ) & {
    /**
     * The breakpoint of the list.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
  };
  /**
   * The slots of the list.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the list.
   */
  export const styles = tv({
    base: ['flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground'],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: ['sm:gap-2.5'],
        md: ['md:gap-2.5'],
        lg: ['lg:gap-2.5'],
      },
    },
  });
  /**
   * The breakpoints of the list.
   */
  export const breakpoints = Object.keys(styles.variants.breakpoint) as [
    Breakpoint,
    ...Breakpoint[],
  ];
  /**
   * The default breakpoint of the list.
   */
  export const defaultBreakpoint = styles.defaultVariants.breakpoint!;
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let breakpoint: Props['breakpoint'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

{#if asChild}
  <slot />
{:else}
  <ol
    {...attributes}
    class="{styles({
      breakpoint,
      class: attributes.class,
    })}"
    data-breakpoint="{breakpoint}"
    bind:this="{el}"
  >
    <slot />
  </ol>
{/if}
