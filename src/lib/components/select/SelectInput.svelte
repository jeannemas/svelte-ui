<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { castAsAny } from '$lib/utils/internal.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.Input>;

  /**
   * The attributes of the input.
   */
  export type Attributes = SvelteHTMLElements['input'];
  /**
   * The props of the input.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the input.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the input.
   */
  export const styles = tv({
    base: [] as string[],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
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
