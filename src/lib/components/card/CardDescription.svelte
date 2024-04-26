<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes of the description component.
   */
  export type Attributes = SvelteHTMLElements['p'];
  /**
   * The props of the description component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the description component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles of the description component.
   */
  export const styles = tv({
    base: ['text-sm text-muted-foreground'],
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

<p
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</p>
