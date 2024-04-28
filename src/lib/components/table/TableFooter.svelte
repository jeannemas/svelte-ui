<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the footer.
   */
  export type Attributes = SvelteHTMLElements['tfoot'];
  /**
   * The props for the footer.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the footer.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the footer.
   */
  export const styles = tv({
    base: ['bg-primary font-medium text-primary-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<tfoot
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</tfoot>
