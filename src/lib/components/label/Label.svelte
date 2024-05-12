<script context="module" lang="ts">
  import { Label as LabelPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<LabelPrimitive.Root>;

  /**
   * The attributes of the label.
   */
  export type Attributes = SvelteHTMLElements['label'];
  /**
   * The props of the label.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the label.
   */
  export type Slots = Primitive['slots'];

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
  type $$Events = Primitive['events'];
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
