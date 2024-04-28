<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the header.
   */
  export type Attributes = SvelteHTMLElements['thead'];
  /**
   * The props for the header.
   */
  export type Props = Record<never, never>;
  /**
   * The slots for the header.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the header.
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
