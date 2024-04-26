<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table body component.
   */
  export type Attributes = SvelteHTMLElements['tbody'];
  /**
   * The props for the table body component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table body component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table body component.
   */
  export const styles = tv({
    base: ['[&_tr:last-child]:border-0'],
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

<tbody
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</tbody>
