<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<CollapsiblePrimitive.Trigger>;

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the trigger.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the trigger.
   */
  export const triggerStyles = tv({
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

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Collapsible.Trigger must be used within a Collapsible.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CollapsiblePrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  class="{triggerStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Trigger>
