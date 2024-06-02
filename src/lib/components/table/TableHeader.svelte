<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes for the header.
   */
  export type Attributes = SvelteHTMLElements['thead'];
  /**
   * The props for the header.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the header.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the header.
   */
  export const headerStyles = tv({
    base: ['[&_tr]:border-b'],
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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<thead
  {...attributes}
  class="{headerStyles({
    class: attributes.class,
  })}"
  on:click
  on:keydown
>
  <slot />
</thead>
