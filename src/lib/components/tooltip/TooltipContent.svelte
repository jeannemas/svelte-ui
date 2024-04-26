<script context="module" lang="ts">
  import { Tooltip as TooltipPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  /**
   * The attributes of the tooltip content.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the tooltip content.
   */
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<
    TooltipPrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  /**
   * The slots of the tooltip content.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<TooltipPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;

  /**
   * The styles of the tooltip content.
   */
  export const styles = tv({
    base: [
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
    ],
  });
</script>

<script
  generics="
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition
  "
  lang="ts"
>
  type $$Events = Record<never, never>;
  type $$Props = Attributes & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;
  type TypedSlots = Slots<TTransition, TTransitionIn, TTransitionOut>;

  export let align: TypedProps['align'] = undefined;
  export let alignOffset: TypedProps['alignOffset'] = undefined;
  export let asChild: TypedProps['asChild'] = undefined;
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
  export let sideOffset: TypedProps['sideOffset'] = 4;
  export let strategy: TypedProps['strategy'] = undefined;
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    y: 8,
    duration: 150,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TooltipPrimitive.Content
  {...attributes}
  align="{align}"
  alignOffset="{alignOffset}"
  asChild="{asChild}"
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
>
  <slot builder="{builder}" />
</TooltipPrimitive.Content>