<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DrawerPrimitive.Overlay>;

  /**
   * The attributes of the overlay.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the overlay.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the overlay.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the overlay.
   */
  export const styles = tv({
    base: ['fixed inset-0 z-50 bg-black/80'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let inTransition: Props['inTransition'] = undefined;
  export let inTransitionConfig: Props['inTransitionConfig'] = undefined;
  export let outTransition: Props['outTransition'] = undefined;
  export let outTransitionConfig: Props['outTransitionConfig'] = undefined;
  export let transition: Props['transition'] = undefined;
  export let transitionConfig: Props['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPrimitive.Overlay
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  inTransition="{inTransition}"
  inTransitionConfig="{inTransitionConfig}"
  outTransition="{outTransition}"
  outTransitionConfig="{outTransitionConfig}"
  transition="{transition}"
  transitionConfig="{transitionConfig}"
/>
