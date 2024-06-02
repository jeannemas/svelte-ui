<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DialogPrimitive.Portal>;

  /**
   * The attributes of the portal.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the portal.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the portal.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the portal.
   */
  export const portalStyles = tv({
    base: [''],
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

<DialogPrimitive.Portal
  {...attributes}
  asChild="{asChild}"
  class="{portalStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</DialogPrimitive.Portal>
