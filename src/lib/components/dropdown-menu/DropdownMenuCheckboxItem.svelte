<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.CheckboxItem>;

  /**
   * The attributes of the checkbox item.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the checkbox item.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the checkbox item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the checkbox item.
   */
  export const checkboxItemStyles = tv({
    base: [
      'relative flex cursor-default select-none flex-row items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let checked: Props['checked'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let onCheckedChange: Props['onCheckedChange'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.CheckboxItem
  {...attributes}
  asChild="{asChild}"
  class="{checkboxItemStyles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  onCheckedChange="{onCheckedChange}"
  bind:checked="{checked}"
  let:builder
  on:click
  on:focusin
  on:focusout
  on:keydown
  on:pointerdown
  on:pointerenter
  on:pointerleave
  on:pointermove
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.CheckboxItem>
