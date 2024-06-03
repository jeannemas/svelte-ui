<script context="module" lang="ts">
  import { Legend } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<Legend>;

  /**
   * The attributes of the legend.
   */
  export type Attributes = SvelteHTMLElements['legend'];
  /**
   * The props of the legend.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the legend.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the legend.
   */
  export const legendStyles = tv({
    base: ['text-sm font-medium leading-none', 'data-[fs-error]:text-red-500'],
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

<Legend
  {...attributes}
  asChild="{asChild}"
  class="{legendStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:legendAttrs
>
  <slot legendAttrs="{legendAttrs}" />
</Legend>
