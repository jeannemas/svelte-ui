<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { itemStyles as selectItemStyles } from '$lib/components/select/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

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
</script>

<!-- <style lang="postcss">
</style> -->

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
  <span class="absolute left-2 flex size-4 flex-row items-center justify-center">
    <ComboboxPrimitive.ItemIndicator>
      <CheckIcon class="size-4" />
    </ComboboxPrimitive.ItemIndicator>
  </span>

  <slot builder="{builder}" isSelected="{isSelected}">
    {label || value}
  </slot>
</ComboboxPrimitive.Item>
