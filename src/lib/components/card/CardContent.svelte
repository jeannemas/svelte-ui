<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the content.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the content.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the content.
   */
  export const styles = tv({
    base: ['p-6 pt-0'],
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
