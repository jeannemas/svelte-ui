<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table row component.
   */
  export type Attributes = SvelteHTMLElements['tr'] & {
    'data-state'?: unknown;
  };
  /**
   * The props for the table row component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table row component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table row component.
   */
  export const styles = tv({
    base: ['border-b transition-colors', 'hover:bg-muted/50', 'data-[state=selected]:bg-muted'],
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
