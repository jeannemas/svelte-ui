<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.CheckboxIndicator>;

  /**
   * The attributes of the checkbox indicator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the checkbox indicator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the checkbox indicator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the checkbox indicator.
   */
  export const checkboxIndicatorStyles = tv({
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
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.CheckboxIndicator
  {...attributes}
  asChild="{asChild}"
  class="{checkboxIndicatorStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
  let:checked
>
  <slot attrs="{attrs}" checked="{checked}">
    <CheckIcon class="size-4" />
  </slot>
</DropdownMenuPrimitive.CheckboxIndicator>
