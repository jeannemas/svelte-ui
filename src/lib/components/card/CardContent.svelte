<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the content.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the content.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the content.
   */
  export const contentStyles = tv({
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

<div
  {...attributes}
  class="{contentStyles({
    class: attributes.class,
  })}"
>
  <slot />
</div>
