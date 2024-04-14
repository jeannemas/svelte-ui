<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Pick<CollapsiblePrimitive.Props, 'onOpenChange'>;
  export type Props = Omit<CollapsiblePrimitive.Props, keyof Attributes | 'onOpenChange'>;
  export type Slots = ComponentSlots<CollapsiblePrimitive.Root>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let open: Props['open'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CollapsiblePrimitive.Root
  {...attributes}
  asChild="{asChild}"
  disabled="{disabled}"
  el="{el}"
  open="{open}"
  let:builder
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Root>
