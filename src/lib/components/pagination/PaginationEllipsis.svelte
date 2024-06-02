<script context="module" lang="ts">
  import EllipsisIcon from 'lucide-svelte/icons/ellipsis';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the ellipsis.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the ellipsis.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the ellipsis.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the ellipsis.
   */
  export const ellipsisStyles = tv({
    base: ['flex size-8 flex-row items-center justify-center'],
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

<span
  {...attributes}
  class="{ellipsisStyles({
    class: attributes.class,
  })}"
  aria-hidden="true"
>
  <slot>
    <EllipsisIcon class="size-4" />

    <span class="sr-only">More pages</span>
  </slot>
</span>
