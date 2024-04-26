<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { HeadingLevel } from '$lib/utils/types.js';

  /**
   * The attributes of the title component.
   */
  export type Attributes<THeadingLevel extends HeadingLevel = 'h3'> =
    SvelteHTMLElements[THeadingLevel];
  /**
   * The props of the title component.
   */
  export type Props<THeadingLevel extends HeadingLevel = 'h3'> = {
    /**
     * The heading level.
     */
    tag?: THeadingLevel;
  };
  /**
   * The slots of the title component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles of the title component.
   */
  export const styles = tv({
    base: ['text-lg font-semibold leading-none tracking-tight'],
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h3'" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = TypedAttributes & TypedProps;
  type $$Slots = Slots;
  type TypedAttributes = Attributes<THeadingLevel>;
  type TypedProps = Props<THeadingLevel>;

  export let tag: TypedProps['tag'] = 'h3' as TypedProps['tag'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<svelte:element
  this="{tag}"
  {...attributes}
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</svelte:element>
