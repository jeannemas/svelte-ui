<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes for the table header component.
   */
  export type Attributes = SvelteHTMLElements['thead'];
  /**
   * The props for the table header component.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the table header component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the table header component.
   */
  export const styles = tv({
    base: ['[&_tr]:border-b'],
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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<thead
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
  on:click
  on:keydown
>
  <slot />
</thead>
