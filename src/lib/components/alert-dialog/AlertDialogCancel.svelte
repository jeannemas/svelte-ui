<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { contentContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Cancel>;

  /**
   * The attributes of the cancel.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the cancel.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the cancel.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the cancel.
   */
  export const cancelStyles = tv({
    base: [''],
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
    throw new Error('AlertDialog.Cancel must be used within an AlertDialog.Content component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The cancel for the alert dialog.

Must be used within an `AlertDialog.Content` component.

### Attributes

Accepts the attributes of a `button` element.

### Events

- `click` - Dispatched when the trigger is clicked.
- `keydown` - Dispatched when a key is pressed down on the trigger.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<AlertDialogPrimitive.Cancel
  {...attributes}
  asChild="{asChild}"
  class="{cancelStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Cancel>
