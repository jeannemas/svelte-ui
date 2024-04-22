<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table cell component.
   */
  export type Attributes = SvelteHTMLElements['td'];
  /**
   * The props for the table cell component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table cell component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table cell component.
   */
  export const styles = tv({
    base: ['p-4 align-middle', '[&:has([role=checkbox])]:pr-0'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<td
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
  on:click
  on:keydown
>
  <slot />
</td>
