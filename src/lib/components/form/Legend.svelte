<script context="module" lang="ts">
  import { Legend, type LegendProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the legend component.
   */
  export type Attributes = SvelteHTMLElements['legend'];
  /**
   * The Svelte 5 like events of the legend component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the legend component.
   */
  export type Props = Omit<LegendProps, keyof Attributes>;
  /**
   * The slots of the legend component.
   */
  export type Slots = ComponentSlots<Legend>;

  /**
   * The styles of the legend.
   */
  export const styles = tv({
    base: ['text-sm font-medium leading-none', 'data-[fs-error]:text-destructive'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:legendAttrs
>
  <slot legendAttrs="{legendAttrs}" />
</Legend>
