<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['tbody'];
  export type Events = Record<never, never>;
  export type Props = Omit<CalendarPrimitive.GridBodyProps, keyof Attributes>;
  export type Slots = ComponentSlots<CalendarPrimitive.GridBody>;
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

<CalendarPrimitive.GridBody
  {...attributes}
  asChild="{asChild}"
  class="{cn(attributes.class)}"
  el="{el}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CalendarPrimitive.GridBody>
