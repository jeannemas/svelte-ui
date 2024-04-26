<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { RootProps } from './index.js';

  /**
   * The attributes for the section element.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props for the section element.
   */
  export type Props = Pick<RootProps, 'breakpoint'>;
  /**
   * The slots for the section element.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the section element.
   */
  export const styles = tv({
    base: ['space-y-1', 'lg:flex lg:gap-x-2 lg:space-y-0'],
    defaultVariants: {
      breakpoint: 'lg',
    },
    variants: {
      breakpoint: {
        sm: ['sm:flex sm:gap-x-2 sm:space-y-0'],
        md: ['md:flex md:gap-x-2 md:space-y-0'],
        lg: ['lg:flex lg:gap-x-2 lg:space-y-0'],
      },
    },
  });
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
