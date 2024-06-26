<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import { itemStyles as selectItemStyles } from '$lib/components/select/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { contentContext, itemContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.Item>;

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the item.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: [...selectItemStyles.base],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let label: Props['label'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const contentCtx = contentContext.get();

  if (!$contentCtx) {
    throw new Error('Combobox.Item must be used within a Combobox.Content component.');
  }

  const itemCtx = itemContext.set(writable());

  $: itemCtx.update(($ctx) => ({
    ...$ctx,
    contentContext: $contentCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.Item
  {...attributes}
  asChild="{asChild}"
  class="{itemStyles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  label="{label}"
  value="{value}"
  let:builder
  let:isSelected
  on:click
  on:focusin
  on:focusout
  on:keydown
  on:pointerleave
  on:pointermove
>
  <slot builder="{builder}" isSelected="{isSelected}">
    {label || value}
  </slot>
</ComboboxPrimitive.Item>
