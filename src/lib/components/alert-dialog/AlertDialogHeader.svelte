<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the header.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the header.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the header.
   */
  export const headerStyles = tv({
    base: ['flex flex-col gap-y-2 text-center'],
    variants: {
      breakpoint: {
        sm: ['sm:text-left'],
        md: ['md:text-left'],
        lg: ['lg:text-left'],
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
    throw new Error('AlertDialog.Header must be used within an AlertDialog.Root component.');
  }

  $: ({ breakpoint } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{headerStyles({
    breakpoint,
    class: attributes.class,
  })}"
>
  <slot />
</div>
