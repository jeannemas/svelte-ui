<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the footer.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the footer.
   */
  export type Props = {
    el?: HTMLDivElement;
  };
  /**
   * The slots of the footer.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the footer.
   */
  export const styles = tv({
    base: ['flex flex-col-reverse', 'sm:flex-row sm:justify-end sm:space-x-2'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
  bind:this="{el}"
>
  <slot />
</div>
