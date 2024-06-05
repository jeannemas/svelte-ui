<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { gridContext, monthsContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Grid>;

  /**
   * The attributes of the grid.
   */
  export type Attributes = SvelteHTMLElements['table'];
  /**
   * The props of the grid.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the grid.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the grid.
   */
  export const gridStyles = tv({
    base: ['w-full border-collapse space-y-1'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const monthsCtx = monthsContext.get();

  if (!monthsCtx) {
    throw new Error('Calendar.Grid must be used within a Calendar.Months component.');
  }

  const gridCtx = gridContext.set(writable());

  $: gridCtx.update(($ctx) => ({
    ...$ctx,
    ...$monthsCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The grid of a month inside a calendar component.

Must be used within a `Calendar.Months` component.

### Attributes

Accepts the attributes of a `table` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<CalendarPrimitive.Grid
  {...attributes}
  asChild="{asChild}"
  class="{gridStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</CalendarPrimitive.Grid>
