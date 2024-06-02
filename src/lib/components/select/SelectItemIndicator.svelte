<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.ItemIndicator>;

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
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.ItemIndicator
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
</SelectPrimitive.ItemIndicator>
