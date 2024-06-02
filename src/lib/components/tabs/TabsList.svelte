<script context="module" lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<TabsPrimitive.List>;

  /**
   * The attributes of the list.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the list.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the list.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the list.
   */
  export const listStyles = tv({
    base: [
      'inline-flex flex-row items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
    ],
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

<TabsPrimitive.List
  {...attributes}
  asChild="{asChild}"
  class="{listStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</TabsPrimitive.List>
