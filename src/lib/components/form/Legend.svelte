<script context="module" lang="ts">
  import { Legend, type LegendProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['legend'];
  export type Events = Record<never, never>;
  export type Props = Omit<LegendProps, keyof Attributes>;
  export type Slots = ComponentSlots<Legend>;
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
  class="{cn(
    'text-sm font-medium leading-none data-[fs-error]:text-destructive',
    attributes.class,
  )}"
  el="{el}"
  let:legendAttrs
>
  <slot legendAttrs="{legendAttrs}" />
</Legend>
