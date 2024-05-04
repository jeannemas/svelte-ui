<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the caption.
   */
  export type Attributes = SvelteHTMLElements['caption'];
  /**
   * The props for the caption.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the caption.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the caption.
   */
  export const styles = tv({
    base: ['mt-4 text-sm text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<caption
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</caption>
