<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { slide } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    AccordionPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
    base: ['overflow-hidden p-2 text-sm transition-all'],
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

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let transition: TypedProps['transition'] = slide as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    duration: 200,
  };

  $: attributes = $$restProps as Attributes;

  const itemCtx = itemContext.get();

  if (!$itemCtx) {
    throw new Error('Accordion.Content must be used within an Accordion.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<AccordionPrimitive.Content
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
>
  <slot builder="{builder}" />
</AccordionPrimitive.Content>
