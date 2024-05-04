<script context="module" lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the list.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the list.
   */
  export type Props = Omit<TabsPrimitive.ListProps, keyof Attributes>;
  /**
   * The slots of the list.
   */
  export type Slots = ComponentSlots<TabsPrimitive.List>;

  /**
   * The styles of the list.
   */
  export const styles = tv({
    base: ['inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TabsPrimitive.List
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</TabsPrimitive.List>
