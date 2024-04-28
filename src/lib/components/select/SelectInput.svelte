<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { castAsAny } from '$lib/utils/internal.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the input.
   */
  export type Attributes = SvelteHTMLElements['input'];
  /**
   * The props of the input.
   */
  export type Props = Omit<SelectPrimitive.InputProps, keyof Attributes>;
  /**
   * The slots of the input.
   */
  export type Slots = ComponentSlots<SelectPrimitive.Input>;

  /**
   * The styles of the input.
   */
  export const styles = tv({
    base: [],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Input
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{castAsAny(builder)}" />
</SelectPrimitive.Input>
