<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { ChevronRightIcon } from 'lucide-svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { variants } from '$lib/components/button/index.js';
  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['button'];
  export type Events = Record<never, never>;
  export type Props = Omit<CalendarPrimitive.NextButtonProps, keyof Attributes>;
  export type Slots = ComponentSlots<CalendarPrimitive.NextButton>;
</script>

<script lang="ts">
  type $$Events = CalendarPrimitive.NextButtonEvents;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.NextButton
  {...attributes}
  asChild="{asChild}"
  class="{cn(
    variants({ variant: 'outline' }),
    'h-7 w-7 bg-transparent p-0 opacity-50',
    'hover:opacity-100',
    attributes.class,
  )}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}">
    <ChevronRightIcon class="h-4 w-4" />
  </slot>
</CalendarPrimitive.NextButton>
