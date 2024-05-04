<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the body.
   */
  export type Attributes = SvelteHTMLElements['tbody'];
  /**
   * The props for the body.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the body.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the body.
   */
  export const styles = tv({
    base: ['[&_tr:last-child]:border-0'],
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

<tbody
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</tbody>
