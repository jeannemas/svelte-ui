<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the header.
   */
  export type Props = {
    el?: HTMLDivElement;
  };
  /**
   * The slots of the header.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the header.
   */
  export const styles = tv({
    base: ['flex flex-col space-y-1.5 text-center', 'sm:text-left'],
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
