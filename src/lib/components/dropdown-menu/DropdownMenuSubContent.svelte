<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  type Primitive<
    TSubContentTransition extends Transition = Transition,
    TSubContentTransitionIn extends Transition = Transition,
    TSubContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DropdownMenuPrimitive.SubContent<
      TSubContentTransition,
      TSubContentTransitionIn,
      TSubContentTransitionOut
    >
  >;

  /**
   * The attributes of the sub content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the sub content.
   */
  export type Props<
    TSubContentTransition extends Transition = Transition,
    TSubContentTransitionIn extends Transition = Transition,
    TSubContentTransitionOut extends Transition = Transition,
  > = Omit<
    Primitive<TSubContentTransition, TSubContentTransitionIn, TSubContentTransitionOut>['props'],
    keyof Attributes
  >;
  /**
   * The slots of the sub content.
   */
  export type Slots<
    TSubContentTransition extends Transition = Transition,
    TSubContentTransitionIn extends Transition = Transition,
    TSubContentTransitionOut extends Transition = Transition,
  > = Primitive<TSubContentTransition, TSubContentTransitionIn, TSubContentTransitionOut>['slots'];

  /**
   * The styles of the sub content.
   */
  export const styles = tv({
    base: [
      'z-50 min-w-32 rounded-md border bg-popover p-1 text-popover-foreground shadow-lg',
      'focus:outline-none',
    ],
  });
</script>

<script
  generics="
    TSubContentTransition extends Transition = Transition,
    TSubContentTransitionIn extends Transition = Transition,
    TSubContentTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = Primitive<
    TSubContentTransition,
    TSubContentTransitionIn,
    TSubContentTransitionOut
  >['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TSubContentTransition, TSubContentTransitionIn, TSubContentTransitionOut>;
  type TypedProps = Props<TSubContentTransition, TSubContentTransitionIn, TSubContentTransitionOut>;

  export let align: TypedProps['align'] = undefined;
  export let asChild: TypedProps['asChild'] = undefined;
  export let alignOffset: TypedProps['alignOffset'] = undefined;
  export let avoidCollisions: TypedProps['avoidCollisions'] = undefined;
  export let collisionBoundary: TypedProps['collisionBoundary'] = undefined;
  export let collisionPadding: TypedProps['collisionPadding'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let fitViewport: TypedProps['fitViewport'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let overlap: TypedProps['overlap'] = undefined;
  export let sameWidth: TypedProps['sameWidth'] = undefined;
  export let side: TypedProps['side'] = undefined;
  export let sideOffset: TypedProps['sideOffset'] = undefined;
  export let strategy: TypedProps['strategy'] = undefined;
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    x: -10,
    y: 0,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.SubContent
  {...attributes}
  align="{align}"
  asChild="{asChild}"
  alignOffset="{alignOffset}"
  avoidCollisions="{avoidCollisions}"
  class="{styles({
    class: attributes.class,
  })}"
  collisionBoundary="{collisionBoundary}"
  collisionPadding="{collisionPadding}"
  el="{el}"
  fitViewport="{fitViewport}"
  inTransition="{inTransition}"
  inTransitionConfig="{inTransitionConfig}"
  outTransition="{outTransition}"
  outTransitionConfig="{outTransitionConfig}"
  overlap="{overlap}"
  sameWidth="{sameWidth}"
  side="{side}"
  sideOffset="{sideOffset}"
  strategy="{strategy}"
  transition="{transition}"
  transitionConfig="{transitionConfig}"
  let:builder
  on:focusout
  on:keydown
  on:pointermove
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.SubContent>
