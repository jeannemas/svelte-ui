<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table component.
   */
  export type Attributes = SvelteHTMLElements['table'];
  /**
   * The props for the table component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table component.
   */
  export const styles = tv({
    base: ['w-full caption-bottom text-sm'],
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

<div class="relative w-full overflow-auto">
  <table
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
  >
    <slot />
  </table>
</div>