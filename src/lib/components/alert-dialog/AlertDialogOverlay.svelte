<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { fade } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  type Primitive<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentInfo<AlertDialogPrimitive.Overlay<TTransition, TTransitionIn, TTransitionOut>>;

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
  > = Omit<Primitive<TTransition, TTransitionIn, TTransitionOut>['props'], keyof Attributes>;
  /**
   * The slots of the overlay.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Primitive<TTransition, TTransitionIn, TTransitionOut>['slots'];

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
  type $$Events = Primitive['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TTransition, TTransitionIn, TTransitionOut>;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;

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
