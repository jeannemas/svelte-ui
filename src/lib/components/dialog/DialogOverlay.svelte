<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { fade } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  type Primitive<
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DialogPrimitive.Overlay<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>
  >;

  /**
   * The attributes of the overlay.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the overlay.
   */
  export type Props<
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = Omit<
    Primitive<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>['props'],
    keyof Attributes
  >;
  /**
   * The slots of the overlay.
   */
  export type Slots<
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = Primitive<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>['slots'];

  /**
   * The styles of the overlay.
   */
  export const styles = tv({
    base: ['fixed inset-0 z-50 bg-background/80 backdrop-blur-sm'],
  });
</script>

<script
  generics="
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = Primitive<
    TOverlayTransition,
    TOverlayTransitionIn,
    TOverlayTransitionOut
  >['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let transition: TypedProps['transition'] = fade as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    duration: 150,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DialogPrimitive.Overlay
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
  on:mouseup
/>
