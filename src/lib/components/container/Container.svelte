<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/index.js';

  export type Attributes<TElement extends keyof HTMLElementTagNameMap = 'div'> =
    SvelteHTMLElements[TElement];
  export type Events = Record<never, never>;
  export type Props<TElement extends keyof HTMLElementTagNameMap = 'div'> = {
    /**
     * The element to render.
     *
     * @default 'div'
     */
    element?: TElement;
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
</script>

<script lang="ts" generics="TElement extends keyof HTMLElementTagNameMap = 'div'">
  type $$Events = Record<never, never>;
  type $$Props = Attributes<TElement> & Events & Props<TElement>;
  type $$Slots = {
    default: Record<never, never>;
  };

  export let element: Props<TElement>['element'] = 'div' as TElement;
  export let xAxis: Props<TElement>['xAxis'] = undefined;
  export let yAxis: Props<TElement>['yAxis'] = undefined;

  $: attributes = $$restProps as Attributes<TElement>;
</script>

<!-- <style lang="postcss">
</style> -->

<svelte:element
  this="{element}"
  {...attributes}
  class="{cn(
    'w-full',
    xAxis && ['mx-auto max-w-7xl px-2', 'sm:px-4', 'md:px-6', 'lg:px-8'],
    yAxis && ['py-2', 'sm:py-4', 'md:py-6', 'lg:py-8'],
    attributes.class,
  )}"
>
  <slot />
</svelte:element>
