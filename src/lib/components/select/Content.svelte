<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { scale } from 'svelte/transition';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<
    SelectPrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<SelectPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;
</script>

<script
  generics="
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = SelectPrimitive.ContentEvents;
  type $$Props = Attributes & Events & TypedProps;
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
  export let inTransition: TypedProps['inTransition'] = flyAndScale as TypedProps['inTransition'];
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = scale as TypedProps['outTransition'];
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = {
    start: 0.95,
    opacity: 0,
    duration: 50,
  };
  export let overlap: TypedProps['overlap'] = undefined;
  export let sameWidth: TypedProps['sameWidth'] = undefined;
  export let side: TypedProps['side'] = undefined;
  export let sideOffset: TypedProps['sideOffset'] = 4;
  export let strategy: TypedProps['strategy'] = undefined;
  export let transition: TypedProps['transition'] = undefined;
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Content
  {...attributes}
  align="{align}"
  alignOffset="{alignOffset}"
  asChild="{asChild}"
  avoidCollisions="{avoidCollisions}"
  class="{cn(
    'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-none',
    attributes.class,
  )}"
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
  on:pointerleave
>
  <div class="w-full p-1">
    <slot builder="{builder}" />
  </div>
</SelectPrimitive.Content>
