<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { gridBodyContext, gridContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.GridBody>;

  /**
   * The attributes of the grid body.
   */
  export type Attributes = SvelteHTMLElements['tbody'];
  /**
   * The props of the grid body.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the grid body.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the grid body.
   */
  export const gridBodyStyles = tv({
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

  const gridCtx = gridContext.get();

  if (!gridCtx) {
    throw new Error('Calendar.GridBody must be used within a Calendar.Grid component.');
  }

  const gridBodyCtx = gridBodyContext.set(writable());

  $: gridBodyCtx.update(($ctx) => ({
    ...$ctx,
    ...$gridCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The grid body of a month inside a calendar component.

Must be used within a `Calendar.Grid` component.

### Attributes

Accepts the attributes of a `tbody` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `attrs` - The attributes of the grid body.
-->

<CalendarPrimitive.GridBody
  {...attributes}
  asChild="{asChild}"
  class="{gridBodyStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridBody>
