<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the description.
   */
  export type Attributes = SvelteHTMLElements['p'];
  /**
   * The props of the description.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the description.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the description.
   */
  export const styles = tv({
    base: ['text-sm text-muted-foreground'],
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

<p
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</p>
