<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes of the months component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the months component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots of the months component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles of the months.
   */
  export const styles = tv({
    base: ['mt-4 flex flex-col space-y-4', 'sm:flex-row sm:space-x-4 sm:space-y-0'],
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
