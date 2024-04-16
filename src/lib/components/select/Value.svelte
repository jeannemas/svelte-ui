<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Omit<SvelteHTMLElements['span'], 'placeholder'>;
  export type Events = Record<never, never>;
  export type Props = Omit<SelectPrimitive.ValueProps, keyof Attributes>;
  export type Slots = ComponentSlots<SelectPrimitive.Value>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let placeholder: Props['placeholder'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Value
  {...attributes}
  asChild="{asChild}"
  el="{el}"
  placeholder="{placeholder}"
  let:attrs
  let:label
>
  <slot attrs="{attrs}" label="{label}" />
</SelectPrimitive.Value>
