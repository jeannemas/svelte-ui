<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the radio group.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the radio group.
   */
  export type Props = Omit<DropdownMenuPrimitive.RadioGroupProps, keyof Attributes>;
  /**
   * The slots of the radio group.
   */
  export type Slots = ComponentSlots<DropdownMenuPrimitive.RadioGroup>;

  /**
   * The styles of the radio group.
   */
  export const styles = tv({
    base: [],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let onValueChange: Props['onValueChange'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.RadioGroup
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  onValueChange="{onValueChange}"
  bind:value="{value}"
  let:builder
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.RadioGroup>
