<script context="module" lang="ts">
  import { Label as LabelPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the label component.
   */
  export type Attributes = SvelteHTMLElements['label'];
  /**
   * The props of the label component.
   */
  export type Props = Omit<LabelPrimitive.Props, keyof Attributes>;
  /**
   * The slots of the label component.
   */
  export type Slots = ComponentSlots<LabelPrimitive.Root>;

  /**
   * The styles of the label.
   */
  export const styles = tv({
    base: [
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    ],
  });
</script>

<script lang="ts">
  type $$Events = LabelPrimitive.Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<LabelPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:mousedown
>
  <slot builder="{builder}" />
</LabelPrimitive.Root>
