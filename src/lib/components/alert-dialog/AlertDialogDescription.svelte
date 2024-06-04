<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { contentContext, rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Description>;

  /**
   * The attributes of the description.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the description.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the description.
   */
  export type Slots = Primitive['slots'];

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
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

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

The description of the alert dialog component.

Must be used within an `AlertDialog.Content` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<AlertDialogPrimitive.Description
  {...attributes}
  asChild="{asChild}"
  class="{descriptionStyles({
    class: attributes.class,
    variant,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Description>
