<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { slide } from 'svelte/transition';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  /**
   * The attributes of the collapsible content component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The Svelte 5 like events of the collapsible content component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the collapsible content component.
   */
  export type Props<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = Omit<
    CollapsiblePrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  /**
   * The slots of the collapsible content component.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<CollapsiblePrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;

  /**
   * The styles of the collapsible content.
   */
  export const styles = tv({
    base: [],
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
  type $$Props = Attributes & Events & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;
  type TypedSlots = Slots<TTransition, TTransitionIn, TTransitionOut>;

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
>
  <slot builder="{builder}" />
</CollapsiblePrimitive.Content>
