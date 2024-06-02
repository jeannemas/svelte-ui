<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, HeadingLevel } from '$lib/utils/types.js';

  /**
   * The attributes of the title.
   */
  export type Attributes = SvelteHTMLElements[HeadingLevel];
  /**
   * The props of the title.
   */
  export type Props<THeadingLevel extends HeadingLevel = 'h5'> = {
    /**
     * The heading level.
     */
    level?: THeadingLevel;
  };
  /**
   * The slots of the title.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the title.
   */
  export const titleStyles = tv({
    base: ['mb-2 font-medium leading-none tracking-tight'],
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h5'" lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<THeadingLevel>;

  export let level: TypedProps['level'] = 'h5' as TypedProps['level'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<svelte:element
  this="{level}"
  {...attributes}
  class="{titleStyles({
    class: attributes.class,
  })}"
>
  <slot />
</svelte:element>
