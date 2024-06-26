<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext, rootContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Header>;

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['header'];
  /**
   * The props of the header.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the header.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the header.
   */
  export const headerStyles = tv({
    base: ['relative flex flex-row items-center justify-between'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Calendar.Header must be used within a Calendar.Root component.');
  }

  const headerCtx = headerContext.set(writable());

  $: headerCtx.update(($ctx) => ({
    ...$ctx,
    rootContext: $rootCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CalendarPrimitive.Header
  {...attributes}
  asChild="{asChild}"
  class="{headerStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.Header>
