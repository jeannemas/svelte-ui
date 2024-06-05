<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, HeadingLevel } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

  /**
   * The attributes of the title.
   */
  export type Attributes = SvelteHTMLElements[HeadingLevel];
  /**
   * The props of the title.
   */
  export type Props<THeadingLevel extends HeadingLevel = 'h3'> = {
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
    base: ['text-lg font-semibold leading-none tracking-tight'],
    variants: {
      variant: {
        danger: ['text-red-500'],
        default: ['text-card-foreground'],
      },
    },
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h3'" lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<THeadingLevel>;

  export let level: TypedProps['level'] = 'h3' as TypedProps['level'];

  $: attributes = $$restProps as Attributes;

  const headerCtx = headerContext.get();

  if (!headerCtx) {
    throw new Error('Card.Title must be used within a Card.Header component.');
  }

  $: ({ rootVariant } = $headerCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The title of the card component.

Must be used within a `Card.Header` component.

### Attributes

Accepts the attributes of a heading element.

### Events

None.

### Props

- `level` - The heading level.

### Slots

- `default` - The default slot.
-->

<svelte:element
  this="{level}"
  {...attributes}
  class="{titleStyles({
    class: attributes.class,
    variant: rootVariant,
  })}"
>
  <slot />
</svelte:element>
