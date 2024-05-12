<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.Label>;

  /**
   * The attributes of the label.
   */
  export type Attributes = SvelteHTMLElements['div'];
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
    base: ['py-1.5 pl-8 pr-2 text-sm font-semibold'],
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

<SelectPrimitive.Label
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</SelectPrimitive.Label>
