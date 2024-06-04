<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Heading>;

  /**
   * The attributes of the heading.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the heading.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the heading.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the heading.
   */
  export const headingStyles = tv({
    base: ['text-sm font-medium'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const headerCtx = headerContext.get();

  if (!headerCtx) {
    throw new Error('Calendar.Heading must be used within a Calendar.Header component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The heading of a calendar component.

Must be used within a `Calendar.Header` component.

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
  - `headingValue` - The value of the heading.
-->

<CalendarPrimitive.Heading
  {...attributes}
  asChild="{asChild}"
  class="{headingStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  let:headingValue
>
  <slot builder="{builder}" headingValue="{headingValue}">
    {headingValue}
  </slot>
</CalendarPrimitive.Heading>
