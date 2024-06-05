<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

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
    base: ['text-sm'],
    variants: {
      variant: {
        danger: ['text-red-500'],
        default: ['text-muted-foreground'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const headerCtx = headerContext.get();

  if (!headerCtx) {
    throw new Error('Card.Description must be used within a Card.Header component.');
  }

  $: ({ rootVariant } = $headerCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The description of the card component.

Must be used within a `Card.Header` component.

### Attributes

Accepts the attributes of a `p` element.

### Events

None.

### Props

None.

### Slots

- `default` - The default slot.
-->

<p
  {...attributes}
  class="{descriptionStyles({
    class: attributes.class,
    variant: rootVariant,
  })}"
>
  <slot />
</p>
