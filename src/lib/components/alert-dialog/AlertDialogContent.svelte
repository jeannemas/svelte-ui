<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import AlertDialogOverlay, {
    type Attributes as AlertDialogOverlayAttributes,
    type Props as AlertDialogOverlayProps,
  } from './AlertDialogOverlay.svelte';
  import AlertDialogPortal, {
    type Attributes as AlertDialogPortalAttributes,
    type Props as AlertDialogPortalProps,
  } from './AlertDialogPortal.svelte';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    AlertDialogPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
    overlayAttributesAndProps?: AlertDialogOverlayAttributes &
      AlertDialogOverlayProps<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>;
    portalAttributesAndProps?: AlertDialogPortalAttributes & AlertDialogPortalProps;
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
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 shadow-lg',
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
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let overlayAttributesAndProps: TypedProps['overlayAttributesAndProps'] = undefined;
  export let portalAttributesAndProps: TypedProps['portalAttributesAndProps'] = undefined;
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPortal {...portalAttributesAndProps}>
  <AlertDialogOverlay {...overlayAttributesAndProps} />

  <AlertDialogPrimitive.Content
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
  </AlertDialogPrimitive.Content>
</AlertDialogPortal>
