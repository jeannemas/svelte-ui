<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes for the body.
   */
  export type Attributes = SvelteHTMLElements['tbody'];
  /**
   * The props for the body.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the body.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the body.
   */
  export const bodyStyles = tv({
    base: ['[&_tr:last-child]:border-0'],
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

<tbody
  {...attributes}
  class="{bodyStyles({
    class: attributes.class,
  })}"
>
  <slot />
</tbody>
