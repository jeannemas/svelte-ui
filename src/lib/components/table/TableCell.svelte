<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes for the cell.
   */
  export type Attributes = SvelteHTMLElements['td'];
  /**
   * The props for the cell.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the cell.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the cell.
   */
  export const cellStyles = tv({
    base: ['p-4 align-middle', '[&:has([role=checkbox])]:pr-0'],
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

<td
  {...attributes}
  class="{cellStyles({
    class: attributes.class,
  })}"
  on:click
  on:keydown
>
  <slot />
</td>
