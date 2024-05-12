<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the head.
   */
  export type Attributes = SvelteHTMLElements['th'];
  /**
   * The props for the head.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the head.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the head.
   */
  export const styles = tv({
    base: [
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
      '[&:has([role=checkbox])]:pr-0',
    ],
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

<th
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</th>
