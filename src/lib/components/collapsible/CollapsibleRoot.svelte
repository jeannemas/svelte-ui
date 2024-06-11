<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<CollapsiblePrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let open: Props['open'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CollapsiblePrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{rootStyles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  onOpenChange="{onOpenChange}"
  bind:open="{open}"
  let:builder
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Root>
