<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the item.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the item.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the item.
   */
  export const styles = tv({
    base: [] as string[],
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

<li
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</li>
