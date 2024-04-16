<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props = Omit<SelectPrimitive.LabelProps, keyof Attributes>;
  export type Slots = ComponentSlots<SelectPrimitive.Label>;
</script>

<script lang="ts">
  type $$Events = SelectPrimitive.LabelEvents;
  type $$Props = Attributes & Events & Props;
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
  class="{cn('py-1.5 pl-8 pr-2 text-sm font-semibold', attributes.class)}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</SelectPrimitive.Label>
