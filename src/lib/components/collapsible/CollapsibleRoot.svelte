<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the collapsible root component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the collapsible root component.
   */
  export type Props = Omit<CollapsiblePrimitive.Props, keyof Attributes>;
  /**
   * The slots of the collapsible root component.
   */
  export type Slots = ComponentSlots<CollapsiblePrimitive.Root>;

  /**
   * The styles of the collapsible root.
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
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let open: Props['open'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CollapsiblePrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  onOpenChange="{onOpenChange}"
  bind:open="{open}"
  let:builder
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Root>
