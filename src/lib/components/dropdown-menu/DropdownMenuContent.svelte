<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    DropdownMenuPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
  > = Omit<
    Primitive<TContentTransition, TContentTransitionIn, TContentTransitionOut>['props'],
    keyof Attributes
  >;
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
  export const contentStyles = tv({
    base: [
      'z-50 min-w-32 rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
      'focus:outline-none',
    ],
  });
</script>

<script
  generics="
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
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
  type TypedProps = Props<TContentTransition, TContentTransitionIn, TContentTransitionOut>;

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
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Content
  {...attributes}
  align="{align}"
  asChild="{asChild}"
  alignOffset="{alignOffset}"
  avoidCollisions="{avoidCollisions}"
  class="{contentStyles({
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
  on:keydown
>
  <slot builder="{builder}" />
</DropdownMenuPrimitive.Content>
