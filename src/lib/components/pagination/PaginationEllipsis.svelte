<script context="module" lang="ts">
  import Ellipsis from 'lucide-svelte/icons/ellipsis';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the ellipsis.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the ellipsis.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the ellipsis.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the ellipsis.
   */
  export const styles = tv({
    base: ['flex h-9 w-9 items-center justify-center'],
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

<span
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
  aria-hidden="true"
>
  <slot>
    <Ellipsis class="h-4 w-4" />

    <span class="sr-only">More pages</span>
  </slot>
</span>
