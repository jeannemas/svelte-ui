<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import Circle from 'lucide-svelte/icons/circle';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the radio item.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the radio item.
   */
  export type Props = Omit<DropdownMenuPrimitive.RadioItemProps, keyof Attributes>;
  /**
   * The slots of the radio item.
   */
  export type Slots = ComponentSlots<DropdownMenuPrimitive.RadioItem>;

  /**
   * The styles of the radio item.
   */
  export const styles = tv({
    base: [
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Events<DropdownMenuPrimitive.RadioItemEvents>;
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
  class="{styles({
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
  <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <DropdownMenuPrimitive.RadioIndicator>
      <Circle class="h-2 w-2 fill-current" />
    </DropdownMenuPrimitive.RadioIndicator>
  </span>

  <slot builder="{builder}" />
</DropdownMenuPrimitive.RadioItem>
