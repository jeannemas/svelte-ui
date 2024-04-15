<script context="module" lang="ts">
  import { Label as LabelPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['label'];
  export type Events = Record<never, never>;
  export type Props = Omit<LabelPrimitive.Props, keyof Attributes>;
  export type Slots = ComponentSlots<LabelPrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = LabelPrimitive.Events;
  type $$Props = Attributes & Events & Props;
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
  class="{cn(
    'text-sm font-medium leading-none',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    attributes.class,
  )}"
  el="{el}"
  let:builder
  on:mousedown
>
  <slot builder="{builder}" />
</LabelPrimitive.Root>
