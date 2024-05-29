<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import XIcon from 'lucide-svelte/icons/x';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import DialogClose, {
    type Attributes as DialogCloseAttributes,
    type Props as DialogCloseProps,
  } from './DialogClose.svelte';
  import DialogOverlay, {
    type Attributes as DialogOverlayAttributes,
    type Props as DialogOverlayProps,
  } from './DialogOverlay.svelte';
  import DialogPortal, {
    type Attributes as DialogPortalAttributes,
    type Props as DialogPortalProps,
  } from './DialogPortal.svelte';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DialogPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
  >;

  /**
   * The attributes of the content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the content.
   */
  export type Props<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = Omit<
    Primitive<TContentTransition, TContentTransitionIn, TContentTransitionOut>['props'],
    keyof Attributes
  > & {
    closeAttributesAndProps?: DialogCloseAttributes & DialogCloseProps;
    overlayAttributesAndProps?: DialogOverlayAttributes &
      DialogOverlayProps<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>;
    portalAttributesAndProps?: DialogPortalAttributes & DialogPortalProps;
  };
  /**
   * The slots of the content.
   */
  export type Slots<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = Primitive<TContentTransition, TContentTransitionIn, TContentTransitionOut>['slots'];

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
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = Primitive<
    TContentTransition,
    TContentTransitionIn,
    TContentTransitionOut
  >['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TContentTransition, TContentTransitionIn, TContentTransitionOut>;
  type TypedProps = Props<
    TContentTransition,
    TContentTransitionIn,
    TContentTransitionOut,
    TOverlayTransition,
    TOverlayTransitionIn,
    TOverlayTransitionOut
  >;

  export let asChild: TypedProps['asChild'] = undefined;
  export let closeAttributesAndProps: TypedProps['closeAttributesAndProps'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let overlayAttributesAndProps: TypedProps['overlayAttributesAndProps'] = undefined;
  export let portalAttributesAndProps: TypedProps['portalAttributesAndProps'] = undefined;
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    duration: 200,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DialogPortal {...portalAttributesAndProps}>
  <DialogOverlay {...overlayAttributesAndProps} />

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

    <DialogClose {...closeAttributesAndProps}>
      <XIcon class="size-4" />

      <span class="sr-only">Close</span>
    </DialogClose>
  </DialogPrimitive.Content>
</DialogPortal>
