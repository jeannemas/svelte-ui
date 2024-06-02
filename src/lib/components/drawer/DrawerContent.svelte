<script context="module" lang="ts">
  import type { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import DrawerOverlay, {
    type Attributes as DrawerOverlayAttributes,
    type Props as DrawerOverlayProps,
  } from './DrawerOverlay.svelte';
  import DrawerPortal, {
    type Attributes as DrawerPortalAttributes,
    type Props as DrawerPortalProps,
  } from './DrawerPortal.svelte';

  // TODO remove comment once VaulSvelte typings are fixed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DrawerPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
    DialogPrimitive.ContentProps<TContentTransition, TContentTransitionIn, TContentTransitionOut>, // TODO change to Primitive<TContentTransition, TTranTContentTransitionInsitionIn, TContentTransitionOut>['props'] once VaulSvelte typings are fixed
    keyof Attributes
  > & {
    overlayAttributesAndProps?: DrawerOverlayAttributes &
      DrawerOverlayProps<TOverlayTransition, TOverlayTransitionIn, TOverlayTransitionOut>;
    portalAttributesAndProps?: DrawerPortalAttributes & DrawerPortalProps;
  };
  /**
   * The slots of the content.
   */
  export type Slots<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DialogPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
  >['slots']; // TODO change to Primitive<TContentTransition, TContentTransitionIn, TContentTransitionOut>['slots'] once VaulSvelte typings are fixed

  /**
   * The styles of the content.
   */
  export const contentStyles = tv({
    base: [
      'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
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
  type $$Events = DialogPrimitive.ContentEvents; // TODO change to Primitive<TContentTransition, TContentTransitionIn, TContentTransitionOut>['events'] once VaulSvelte typings are fixed
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
  export let transition: TypedProps['transition'] = undefined;
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPortal {...portalAttributesAndProps}>
  <DrawerOverlay {...overlayAttributesAndProps} />

  <DrawerPrimitive.Content
    {...attributes}
    asChild="{asChild}"
    class="{contentStyles({
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
    <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div>

    <slot builder="{builder}" />
  </DrawerPrimitive.Content>
</DrawerPortal>
