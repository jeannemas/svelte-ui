<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table caption component.
   */
  export type Attributes = SvelteHTMLElements['caption'];
  /**
   * The props for the table caption component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table caption component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table caption component.
   */
  export const styles = tv({
    base: ['mt-4 text-sm text-muted-foreground'],
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

<caption
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</caption>
