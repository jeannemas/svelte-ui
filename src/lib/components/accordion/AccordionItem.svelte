<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { itemContext, rootContext } from './context.js';

  type Primitive = ComponentInfo<AccordionPrimitive.Item>;

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the item.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: ['border-border'],
    defaultVariants: {
      disabled: false,
    },
    variants: {
      disabled: {
        true: ['cursor-default'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = itemStyles.defaultVariants.disabled;
  export let el: Props['el'] = undefined;
  export let value: Props['value'];

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('Accordion.Item must be used within an Accordion.Root component.');
  }

  const itemCtx = itemContext.set(writable());

  $: itemCtx.update(($itemCtx) => ({
    ...$itemCtx,
    disabled,
  }));

  $: ({ disabled: itemDisabled } = $itemCtx!);
  $: ({ disabled: rootDisabled } = $rootCtx!);
  $: isDisabled = rootDisabled || itemDisabled;
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

An item of the accordion component.

Must be used within an `Accordion.Root` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - When `true`, prevents the user from interacting with the item. Overrides the `disabled` prop of the root component.
- `el` - Bind to the underlying DOM element of the component.
- `value` - The value of the item. You can bind this to a value to programmatically control the open state.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<AccordionPrimitive.Item
  {...attributes}
  asChild="{asChild}"
  class="{itemStyles({
    class: attributes.class,
    disabled: isDisabled,
  })}"
  disabled="{isDisabled}"
  el="{el}"
  value="{value}"
  let:builder
>
  <slot builder="{builder}" />
</AccordionPrimitive.Item>
