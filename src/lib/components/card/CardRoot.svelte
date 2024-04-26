<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes of the root component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the root component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles of the root component.
   */
  export const styles = tv({
    base: ['rounded-lg border bg-card text-card-foreground shadow-sm'],
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

<div
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</div>
