<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { gridBodyContext, gridHeadContext, gridRowContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.GridRow>;

  /**
   * The attributes of the grid row.
   */
  export type Attributes = SvelteHTMLElements['tr'];
  /**
   * The props of the grid row.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the grid row.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the grid row.
   */
  export const gridRowStyles = tv({
    base: ['flex flex-row'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const gridHeadCtx = gridHeadContext.get();
  const gridBodyCtx = gridBodyContext.get();

  if (!$gridHeadCtx && !$gridBodyCtx) {
    throw new Error(
      'Calendar.GridRow must be used within a Calendar.GridHead or Calendar.GridBody component.',
    );
  }

  const gridRowCtx = gridRowContext.set(writable());

  $: gridRowCtx.update(($ctx) => ({
    ...$ctx,
    gridHeadContext: $gridHeadCtx!,
    gridBodyContext: $gridBodyCtx!,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CalendarPrimitive.GridRow
  {...attributes}
  asChild="{asChild}"
  class="{gridRowStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridRow>
