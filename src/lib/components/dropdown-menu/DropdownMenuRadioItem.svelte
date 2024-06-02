<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.RadioItem>;

  /**
   * The attributes of the radio item.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the radio item.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the radio item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the radio item.
   */
  export const radioItemStyles = tv({
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
  export let el: Props['el'] = undefined;
  export let value: Props['value'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.RadioItem
  {...attributes}
  asChild="{asChild}"
  class="{radioItemStyles({
    class: attributes.class,
  })}"
  el="{el}"
  value="{value}"
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
</DropdownMenuPrimitive.RadioItem>
