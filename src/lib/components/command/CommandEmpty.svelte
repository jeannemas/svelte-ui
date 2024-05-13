<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Empty>;

  /**
   * The attributes of the empty.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the empty.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the empty.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the empty.
   */
  export const styles = tv({
    base: ['py-6 text-center text-sm'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CommandPrimitive.Empty
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
>
  <slot />
</CommandPrimitive.Empty>
