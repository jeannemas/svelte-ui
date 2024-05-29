<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the footer.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the footer.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the footer.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the footer.
   */
  export const footerStyles = tv({
    base: ['flex flex-col-reverse gap-2'],
    variants: {
      breakpoint: {
        sm: ['sm:flex-row sm:justify-end'],
        md: ['md:flex-row md:justify-end'],
        lg: ['lg:flex-row lg:justify-end'],
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
    throw new Error('AlertDialog.Footer must be used within an AlertDialog.Root component.');
  }

  $: ({ breakpoint } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{footerStyles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</div>
