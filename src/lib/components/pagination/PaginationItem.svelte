<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the item.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the item.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<li
  {...attributes}
  class="{itemStyles({
    class: attributes.class,
  })}"
>
  <slot />
</li>
