<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes for the section.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props for the section.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the section.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the section.
   */
  export const sectionStyles = tv({
    base: ['space-y-1'],
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
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('TopNavigation.Section must be used within a TopNavigation.Root component.');
  }

  $: ({ breakpoint } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{sectionStyles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</div>
