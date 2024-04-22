<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the collapsible trigger component.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The Svelte 5 like events of the collapsible trigger component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the collapsible trigger component.
   */
  export type Props = Omit<CollapsiblePrimitive.TriggerProps, keyof Attributes>;
  /**
   * The slots of the collapsible trigger component.
   */
  export type Slots = ComponentSlots<CollapsiblePrimitive.Trigger>;

  /**
   * The styles of the collapsible trigger.
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
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CollapsiblePrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Trigger>
