<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the shortcut.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the shortcut.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the shortcut.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the shortcut.
   */
  export const shortcutStyles = tv({
    base: ['ml-auto text-xs tracking-widest opacity-60'],
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

<span
  {...attributes}
  class="{shortcutStyles({
    class: attributes.class,
  })}"
>
  <slot />
</span>
