<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes for the caption.
   */
  export type Attributes = SvelteHTMLElements['caption'];
  /**
   * The props for the caption.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the caption.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the caption.
   */
  export const captionStyles = tv({
    base: ['mt-4 text-sm text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<caption
  {...attributes}
  class="{captionStyles({
    class: attributes.class,
  })}"
>
  <slot />
</caption>
