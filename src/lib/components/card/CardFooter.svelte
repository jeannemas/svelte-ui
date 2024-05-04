<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the footer.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the footer.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the footer.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the footer.
   */
  export const styles = tv({
    base: ['flex items-center p-6 pt-0'],
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

<div
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</div>
