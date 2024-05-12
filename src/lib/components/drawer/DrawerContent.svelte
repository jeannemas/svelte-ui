<script context="module" lang="ts">
  import type { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import DrawerOverlay from './DrawerOverlay.svelte';
  import DrawerPortal from './DrawerPortal.svelte';

  // TODO remove comment once VaulSvelte typings are fixed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Primitive<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentInfo<DrawerPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;

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
  > = Omit<
    DialogPrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>, // TODO change to Primitive<TTransition, TTransitionIn, TTransitionOut>['props'] once VaulSvelte typings are fixed
    keyof Attributes
  >;
  /**
   * The slots of the content.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentInfo<DialogPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>['slots']; // TODO change to Primitive<TTransition, TTransitionIn, TTransitionOut>['slots'] once VaulSvelte typings are fixed

  /**
   * The styles of the content.
   */
  export const styles = tv({
    base: [
      'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
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
  type $$Events = DialogPrimitive.ContentEvents; // TODO change to Primitive<TTransition, TTransitionIn, TTransitionOut>['events'] once VaulSvelte typings are fixed
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TTransition, TTransitionIn, TTransitionOut>;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let transition: TypedProps['transition'] = undefined;
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPortal>
  <DrawerOverlay />

  <DrawerPrimitive.Content
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
    <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div>

    <slot builder="{builder}" />
  </DrawerPrimitive.Content>
</DrawerPortal>
