<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the footer.
   */
  export type Attributes = SvelteHTMLElements['footer'];
  /**
   * The props of the footer.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the footer.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the footer.
   */
  export const footerStyles = tv({
    base: ['flex flex-row items-center'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Card.Content must be used within a Card.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<footer
  {...attributes}
  class="{footerStyles({
    class: attributes.class,
  })}"
>
  <slot />
</footer>
