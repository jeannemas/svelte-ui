<script context="module" lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<TabsPrimitive.Content>;

  /**
   * The attributes of the content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the content.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the content.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the content.
   */
  export const contentStyles = tv({
    base: [
      'mt-2 ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let value: Props['value'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TabsPrimitive.Content
  {...attributes}
  asChild="{asChild}"
  class="{contentStyles({
    class: attributes.class,
  })}"
  el="{el}"
  value="{value}"
  let:builder
>
  <slot builder="{builder}" />
</TabsPrimitive.Content>
