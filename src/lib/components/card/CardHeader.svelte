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
  export type Props = EmptyObject;
  /**
   * The slots of the header.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the header.
   */
  export const headerStyles = tv({
    base: ['flex flex-col gap-y-2'],
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
  class="{headerStyles({
    class: attributes.class,
  })}"
>
  <slot />
</div>
