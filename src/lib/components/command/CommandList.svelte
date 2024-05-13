<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.List>;

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
  export const styles = tv({
    base: ['max-h-[300px] overflow-y-auto overflow-x-hidden'],
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

<CommandPrimitive.List
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
>
  <slot />
</CommandPrimitive.List>
