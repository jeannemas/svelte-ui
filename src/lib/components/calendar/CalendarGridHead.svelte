<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { gridContext, gridHeadContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.GridHead>;

  /**
   * The attributes of the grid head.
   */
  export type Attributes = SvelteHTMLElements['thead'];
  /**
   * The props of the grid head.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the grid head.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the grid head.
   */
  export const gridHeadStyles = tv({
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

  if (!$gridCtx) {
    throw new Error('Calendar.GridHead must be used within a Calendar.Grid component.');
  }

  const gridHeadCtx = gridHeadContext.set(writable());

  $: gridHeadCtx.update(($ctx) => ({
    ...$ctx,
    gridContext: $gridCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CalendarPrimitive.GridHead
  {...attributes}
  asChild="{asChild}"
  class="{gridHeadStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridHead>
