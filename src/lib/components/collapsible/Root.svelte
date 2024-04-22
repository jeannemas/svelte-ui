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
   * The Svelte 5 like events of the collapsible root component.
   */
  export type Events = Pick<CollapsiblePrimitive.Props, 'onOpenChange'>;
  /**
   * The props of the collapsible root component.
   */
  export type Props = Omit<CollapsiblePrimitive.Props, keyof Attributes | keyof Events>;
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
  class="{styles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  open="{open}"
  let:builder
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Root>
