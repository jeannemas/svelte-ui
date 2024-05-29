<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the months.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the months.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the months.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the months.
   */
  export const monthsStyles = tv({
    base: ['mt-4 flex flex-col gap-y-4'],
    variants: {
      breakpoint: {
        sm: ['sm:flex-row sm:gap-x-4 sm:gap-y-0'],
        md: ['md:flex-row md:gap-x-4 md:gap-y-0'],
        lg: ['lg:flex-row lg:gap-x-4 lg:gap-y-0'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('Calendar.Months must be used within a Calendar.Root component.');
  }

  $: ({ breakpoint } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{monthsStyles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</div>
