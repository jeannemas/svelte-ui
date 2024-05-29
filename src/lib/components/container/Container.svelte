<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the container.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the container.
   */
  export type Props = {
    /**
     * Whether to add horizontal padding.
     *
     * @default false
     */
    xAxis?: boolean;
    /**
     * Whether to add vertical padding.
     *
     * @default false
     */
    yAxis?: boolean;
  };
  /**
   * The slots of the container.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the container.
   */
  export const styles = tv({
    base: ['w-full'],
    variants: {
      xAxis: {
        true: ['mx-auto max-w-7xl px-2', 'sm:px-4', 'md:px-6', 'lg:px-8'],
      },
      yAxis: {
        true: ['py-2', 'sm:py-4', 'md:py-6', 'lg:py-8'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let xAxis: Props['xAxis'] = undefined;
  export let yAxis: Props['yAxis'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{styles({
    class: attributes.class,
    xAxis,
    yAxis,
  })}"
>
  <slot />
</div>
