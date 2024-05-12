<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import X from 'lucide-svelte/icons/x';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import DialogClose from './DialogClose.svelte';
  import DialogOverlay from './DialogOverlay.svelte';
  import DialogPortal from './DialogPortal.svelte';

  type Primitive<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentInfo<DialogPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;

  /**
   * The attributes of the content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the content.
   */
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<Primitive<TTransition, TTransitionIn, TTransitionOut>['props'], keyof Attributes>;
  /**
   * The slots of the content.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Primitive<TTransition, TTransitionIn, TTransitionOut>['slots'];

  /**
   * The styles of the content.
   */
  export const styles = tv({
    base: [
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg',
      'sm:rounded-lg',
      'md:w-full',
    ],
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
  type $$Events = Primitive<TTransition, TTransitionIn, TTransitionOut>['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TTransition, TTransitionIn, TTransitionOut>;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    duration: 200,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DialogPortal>
  <DialogOverlay />

  <DialogPrimitive.Content
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
    let:builder
    on:pointerdown
    on:pointermove
    on:pointerup
    on:touchcancel
    on:touchend
    on:touchmove
    on:touchstart
  >
    <slot builder="{builder}" />

    <DialogClose>
      <X class="h-4 w-4" />

      <span class="sr-only">Close</span>
    </DialogClose>
  </DialogPrimitive.Content>
</DialogPortal>
