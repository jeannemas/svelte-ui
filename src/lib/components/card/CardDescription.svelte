<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the description.
   */
  export type Attributes = SvelteHTMLElements['p'];
  /**
   * The props of the description.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the description.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the description.
   */
  export const descriptionStyles = tv({
    base: ['text-sm text-muted-foreground'],
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

<p
  {...attributes}
  class="{descriptionStyles({
    class: attributes.class,
  })}"
>
  <slot />
</p>
