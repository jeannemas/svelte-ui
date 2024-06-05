<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive<TMultiple extends boolean = false> = ComponentInfo<
    AccordionPrimitive.Root<TMultiple>
  >;

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props<TMultiple extends boolean = false> = Omit<
    Primitive<TMultiple>['props'],
    keyof Attributes
  >;
  /**
   * The slots of the root.
   */
  export type Slots<TMultiple extends boolean = false> = Primitive<TMultiple>['slots'];

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: ['divide-y'],
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

<script generics="TMultiple extends boolean = false" lang="ts">
  type $$Events = Primitive<TMultiple>['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TMultiple>;
  type TypedProps = Props<TMultiple>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let disabled: TypedProps['disabled'] = rootStyles.defaultVariants.disabled;
  export let el: TypedProps['el'] = undefined;
  export let multiple: TypedProps['multiple'] = undefined;
  export let onValueChange: TypedProps['onValueChange'] = undefined;
  export let value: TypedProps['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    rootDisabled: disabled,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The root of the accordion component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - When `true`, prevents the user from interacting with the accordion.
- `el` - Bind to the underlying DOM element of the component.
- `multiple` - If `true`, multiple accordion items can be open at the same time.
- `onValueChange` - A callback function called when the value changes.
- `value` - The value of the accordion. You can bind this to a value to programmatically control the open state.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

### Components hierarchy

```html
<Accordion.Root>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger>
        ...
      </Accordion.Trigger>
    </Accordion.Header>

    <Accordion.Content>
      ...
    </Accordion.Content>
  </Accordion.Item>

  ...
</Accordion.Root>
```
-->

<AccordionPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{rootStyles({
    class: attributes.class,
    disabled,
  })}"
  disabled="{disabled}"
  el="{el}"
  multiple="{multiple}"
  onValueChange="{onValueChange}"
  bind:value="{value}"
  let:builder
>
  <slot builder="{builder}" />
</AccordionPrimitive.Root>
