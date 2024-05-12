<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.Separator>;

  /**
   * The attributes of the separator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the separator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the separator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the separator.
   */
  export const styles = tv({
    base: ['-mx-1 my-1 h-px bg-muted'],
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

<SelectPrimitive.Separator
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</SelectPrimitive.Separator>
