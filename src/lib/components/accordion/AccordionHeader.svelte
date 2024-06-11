<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext, itemContext } from './context.js';

  type Primitive = ComponentInfo<AccordionPrimitive.Header>;

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['div'];
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
    base: ['flex flex-row'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let level: Props['level'] = undefined;

  $: attributes = $$restProps as Attributes;

  const itemCtx = itemContext.get();

  if (!$itemCtx) {
    throw new Error('Accordion.Header must be used within an Accordion.Item component.');
  }

  const headerCtx = headerContext.set(writable());

  $: headerCtx.update(($ctx) => ({
    ...$ctx,
    itemContext: $itemCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<AccordionPrimitive.Header
  {...attributes}
  asChild="{asChild}"
  class="{headerStyles({
    class: attributes.class,
  })}"
  el="{el}"
  level="{level}"
  let:builder
>
  <slot builder="{builder}" />
</AccordionPrimitive.Header>
