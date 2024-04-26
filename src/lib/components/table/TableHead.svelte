<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table head component.
   */
  export type Attributes = SvelteHTMLElements['th'];
  /**
   * The props for the table head component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table head component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table head component.
   */
  export const styles = tv({
    base: [
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
      '[&:has([role=checkbox])]:pr-0',
    ],
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

<th
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</th>
