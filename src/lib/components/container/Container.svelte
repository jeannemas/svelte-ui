<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props = {
    /**
     * Whether to add horizontal padding.
     *
     * By default, the padding is `px-2 sm:px-4 md:px-6 lg:px-8`.
     *
     * @default false
     */
    xAxis?: boolean;
    /**
     * Whether to add vertical padding.
     *
     * By default, the padding is `py-2 sm:py-4 md:py-6 lg:py-8`.
     *
     * @default false
     */
    yAxis?: boolean;
  };
  export type Slots = {
    default: Record<never, never>;
  };
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let xAxis: Props['xAxis'] = undefined;
  export let yAxis: Props['yAxis'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{cn(
    'w-full',
    xAxis && ['mx-auto max-w-7xl px-2', 'sm:px-4', 'md:px-6', 'lg:px-8'],
    yAxis && ['py-2', 'sm:py-4', 'md:py-6', 'lg:py-8'],
    attributes.class,
  )}"
>
  <slot />
</div>
