<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  import type { RootProps } from './index.js';

  /**
   * The attributes for the button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props for the button.
   */
  export type Props = Pick<RootProps, 'breakpoint'>;
  /**
   * The slots for the button.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the button.
   */
  export const styles = tv({
    base: [
      'flex w-full flex-row items-center gap-x-2 border-l-4 border-transparent p-2 text-lg font-medium text-foreground transition-colors',
      'hover:border-primary hover:bg-accent',
    ],
    defaultVariants: {
      breakpoint: 'lg',
    },
    variants: {
      breakpoint: {
        sm: ['sm:border-b-2 sm:border-l-0 sm:text-base', 'sm:hover:bg-transparent'],
        md: ['md:border-b-2 md:border-l-0 md:text-base', 'md:hover:bg-transparent'],
        lg: ['lg:border-b-2 lg:border-l-0 lg:text-base', 'lg:hover:bg-transparent'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<button
  {...attributes}
  class="{styles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</button>
