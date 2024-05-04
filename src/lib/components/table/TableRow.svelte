<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the row.
   */
  export type Attributes = SvelteHTMLElements['tr'] & {
    'data-state'?: unknown;
  };
  /**
   * The props for the row.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the row.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the row.
   */
  export const styles = tv({
    base: ['border-b transition-colors', 'hover:bg-muted/50', 'data-[state=selected]:bg-muted'],
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

<tr
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
  on:click
  on:keydown
>
  <slot />
</tr>
