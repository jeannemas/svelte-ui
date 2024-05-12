<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CollapsiblePrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the root.
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
