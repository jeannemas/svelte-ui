<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props = Omit<SelectPrimitive.SeparatorProps, keyof Attributes>;
  export type Slots = ComponentSlots<SelectPrimitive.Separator>;
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

<SelectPrimitive.Separator
  {...attributes}
  asChild="{asChild}"
  class="{cn('-mx-1 my-1 h-px bg-muted', attributes.class)}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</SelectPrimitive.Separator>
