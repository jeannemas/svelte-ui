<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.ItemIndicator>;

  /**
   * The attributes of the item indicator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the item indicator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the item indicator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the item indicator.
   */
  export const itemIndicatorStyles = tv({
    base: ['absolute left-2 flex size-4 flex-row items-center justify-center'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const itemCtx = itemContext.get();

  if (!$itemCtx) {
    throw new Error('Combobox.ItemIndicator must be used within a Combobox.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.ItemIndicator
  {...attributes}
  asChild="{asChild}"
  class="{itemIndicatorStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
  let:isSelected
>
  <slot attrs="{attrs}" isSelected="{isSelected}">
    <CheckIcon class="size-4" />
  </slot>
</ComboboxPrimitive.ItemIndicator>
