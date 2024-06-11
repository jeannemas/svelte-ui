<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { scale } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, ElementEvent, Transition } from '$lib/utils/types.js';

  import { rootContext } from './context.js';
  import SelectItem from './SelectItem.svelte';
  import SelectItemIndicator from './SelectItemIndicator.svelte';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    SelectPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
      'relative z-50 w-full min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none',
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
  type $$Events = Omit<Primitive['events'], 'keydown'> & {
    keydown: ElementEvent<HTMLDivElement, KeyboardEvent>; // TODO change once bits-ui is updated
  };
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TContentTransition, TContentTransitionIn, TContentTransitionOut>;
  type TypedProps = Props<TContentTransition, TContentTransitionIn, TContentTransitionOut>;

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

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Select.Content must be used within a Select.Root component.');
  }

  $: ({ items } = $rootCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Content
  {...attributes}
  align="{align}"
  alignOffset="{alignOffset}"
  asChild="{asChild}"
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
  on:pointerleave
>
  <slot builder="{builder}">
    {#if items}
      {#each items as { label, value } (value)}
        <SelectItem label="{label}" value="{value}">
          <SelectItemIndicator />

          {label}
        </SelectItem>
      {/each}
    {/if}
  </slot>
</SelectPrimitive.Content>
