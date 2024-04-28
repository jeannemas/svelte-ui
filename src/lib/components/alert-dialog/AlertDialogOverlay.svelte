<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { fade } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  /**
   * The attributes of the overlay.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the overlay.
   */
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<
    AlertDialogPrimitive.OverlayProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  /**
   * The slots of the overlay.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<AlertDialogPrimitive.Overlay<TTransition, TTransitionIn, TTransitionOut>>;

  /**
   * The styles of the overlay.
   */
  export const styles = tv({
    base: ['fixed inset-0 z-50 bg-background/80 backdrop-blur-sm'],
  });
</script>

<script
  generics="
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = Record<never, never>;
  type $$Props = Attributes & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;
  type TypedSlots = Slots<TTransition, TTransitionIn, TTransitionOut>;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let inTransition: Props['inTransition'] = undefined;
  export let inTransitionConfig: Props['inTransitionConfig'] = undefined;
  export let outTransition: Props['outTransition'] = undefined;
  export let outTransitionConfig: Props['outTransitionConfig'] = undefined;
  export let transition: Props['transition'] = fade as Props['transition'];
  export let transitionConfig: Props['transitionConfig'] = {
    duration: 150,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Overlay
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
