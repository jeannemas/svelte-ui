<script context="module" lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['button'];
  export type Events = Record<never, never>;
  export type Props = Omit<PopoverPrimitive.CloseProps, keyof Attributes>;
  export type Slots = ComponentSlots<PopoverPrimitive.Close>;
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

<PopoverPrimitive.Close {...attributes} asChild="{asChild}" el="{el}" let:builder>
  <slot builder="{builder}" />
</PopoverPrimitive.Close>
