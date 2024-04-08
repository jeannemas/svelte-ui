<script context="module" lang="ts">
  import { Collapsible as CollapsiblePrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { slide } from 'svelte/transition';

  import type { Transition } from '$lib/utils/types.js';

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
</script>

<script
  lang="ts"
  generics="TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,"
>
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props<TTransition, TTransitionIn, TTransitionOut>;
  type $$Slots = {
    default: Record<never, never>;
  };

  export let transition: Props<TTransition, TTransitionIn, TTransitionOut>['transition'] =
    slide as Props<TTransition, TTransitionIn, TTransitionOut>['transition'];
  export let transitionConfig: Props<
    TTransition,
    TTransitionIn,
    TTransitionOut
  >['transitionConfig'] = {
    duration: 150,
  };

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CollapsiblePrimitive.Content
  {...attributes}
  transition="{transition}"
  transitionConfig="{transitionConfig}"
>
  <slot />
</CollapsiblePrimitive.Content>
