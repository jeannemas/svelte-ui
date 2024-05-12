<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, ElementEvent } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.Item>;

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
  export const styles = tv({
    base: [
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Omit<Primitive['events'], 'focusin' | 'focusout' | 'keydown' | 'pointerleave'> & {
    // TODO change once bits-ui is updated
    focusin: ElementEvent<HTMLDivElement, FocusEvent>;
    focusout: ElementEvent<HTMLDivElement, FocusEvent>;
    keydown: ElementEvent<HTMLDivElement, KeyboardEvent>;
    pointerleave: ElementEvent<HTMLDivElement, PointerEvent>;
  };
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let label: Props['label'] = undefined;
  export let value: Props['value'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Item
  {...attributes}
  asChild="{asChild}"
  class="{styles({
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
  <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <SelectPrimitive.ItemIndicator>
      <CheckIcon class="h-4 w-4" />
    </SelectPrimitive.ItemIndicator>
  </span>

  <slot builder="{builder}" isSelected="{isSelected}">
    {label || value}
  </slot>
</SelectPrimitive.Item>
