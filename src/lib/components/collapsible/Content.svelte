<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { slide } from 'svelte/transition';

  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<
    CollapsiblePrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<CollapsiblePrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;
</script>

<script
  lang="ts"
  generics="
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition
  "
>
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & TypedProps;
  type $$Slots = Slots<TTransition, TTransitionIn, TTransitionOut>;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let inTransition: TypedProps['inTransition'] = undefined;
  export let inTransitionConfig: TypedProps['inTransitionConfig'] = undefined;
  export let outTransition: TypedProps['outTransition'] = undefined;
  export let outTransitionConfig: TypedProps['outTransitionConfig'] = undefined;
  export let transition: TypedProps['transition'] = slide as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = {
    duration: 150,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CollapsiblePrimitive.Content
  {...attributes}
  asChild="{asChild}"
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
</CollapsiblePrimitive.Content>
