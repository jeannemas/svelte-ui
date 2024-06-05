<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = {
    /**
     * The variant of the root.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: EmptyObject;
  };
  /**
   * The variant of the root.
   */
  export type Variant = NonNullable<VariantProps<typeof rootStyles>['variant']>;

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: ['flex flex-col gap-y-4 rounded-lg border p-4 shadow-sm'],
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        danger: ['border-red-500 bg-red-50'],
        default: ['border-border bg-card'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let variant: Props['variant'] = rootStyles.defaultVariants.variant;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    rootVariant: variant,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The root of the card component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `variant` - The variant of the card.

### Slots

- `default` - The default slot.

### Components hierarchy

```html
<Card.Root>
  <Card.Header>
    <Card.Title />

    <Card.Description />
  </Card.Header>

  <Card.Content>
    ...
  </Card.Content>

  <Card.Footer>
    ...
  </Card.Footer>
</Card.Root>
```
-->

<div
  {...attributes}
  class="{rootStyles({
    class: attributes.class,
    variant,
  })}"
>
  <slot />
</div>
