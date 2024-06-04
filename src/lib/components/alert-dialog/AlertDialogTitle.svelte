<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, HeadingLevel } from '$lib/utils/types.js';

  import { contentContext, rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Title>;

  /**
   * The attributes of the title.
   */
  export type Attributes = SvelteHTMLElements[HeadingLevel];
  /**
   * The props of the title.
   */
  export type Props<THeadingLevel extends HeadingLevel = 'h3'> = Omit<
    Primitive['props'],
    keyof Attributes | 'level'
  > & {
    level?: THeadingLevel;
  };
  /**
   * The slots of the title.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the title.
   */
  export const titleStyles = tv({
    base: ['text-lg font-semibold'],
    variants: {
      variant: {
        danger: ['text-red-500'],
        default: ['text-foreground'],
      },
    },
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h3'" lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<THeadingLevel>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let level: TypedProps['level'] = 'h3' as TypedProps['level'];

  $: attributes = $$restProps as Attributes;

  const contentCtx = contentContext.get();

  if (!contentCtx) {
    throw new Error('AlertDialog.Title must be used within an AlertDialog.Content component.');
  }

  const rootCtx = rootContext.get();

  $: ({ variant } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The title of the alert dialog component.

Must be used within an `AlertDialog.Content` component.

### Attributes

Accepts the attributes of a heading element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.
- `level` - The heading level.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<AlertDialogPrimitive.Title
  {...attributes}
  asChild="{asChild}"
  class="{titleStyles({
    class: attributes.class,
    variant,
  })}"
  el="{el}"
  level="{level}"
  let:builder
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Title>
