<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DialogPrimitive.Description>;

  /**
   * The attributes of the description.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the description.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the description.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the description.
   */
  export const descriptionStyles = tv({
    base: ['text-sm text-muted-foreground'],
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

<DialogPrimitive.Description
  {...attributes}
  asChild="{asChild}"
  class="{descriptionStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</DialogPrimitive.Description>
