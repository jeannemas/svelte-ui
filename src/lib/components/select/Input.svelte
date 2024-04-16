<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { castAsAny } from '$lib/utils/internal.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['input'];
  export type Events = Record<never, never>;
  export type Props = Omit<SelectPrimitive.InputProps, keyof Attributes>;
  export type Slots = ComponentSlots<SelectPrimitive.Input>;
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

<SelectPrimitive.Input {...attributes} asChild="{asChild}" el="{el}" let:builder>
  <slot builder="{castAsAny(builder)}" />
</SelectPrimitive.Input>
