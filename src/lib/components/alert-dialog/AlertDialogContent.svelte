<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentSlots, Transition } from '$lib/utils/types.js';

  import * as AlertDialog from './index.js';

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
    AlertDialogPrimitive.ContentProps<TTransition, TTransitionIn, TTransitionOut>,
    keyof Attributes
  >;
  /**
   * The slots of the content.
   */
  export type Slots<
    TTransition extends Transition = Transition,
    TTransitionIn extends Transition = Transition,
    TTransitionOut extends Transition = Transition,
  > = ComponentSlots<AlertDialogPrimitive.Content<TTransition, TTransitionIn, TTransitionOut>>;

  /**
   * The styles of the content.
   */
  export const styles = tv({
    base: [
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 shadow-lg',
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
  type $$Events = Record<never, never>;
  type $$Props = Attributes & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<TTransition, TTransitionIn, TTransitionOut>;
  type TypedSlots = Slots<TTransition, TTransitionIn, TTransitionOut>;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let inTransition: Props['inTransition'] = undefined;
  export let inTransitionConfig: Props['inTransitionConfig'] = undefined;
  export let outTransition: Props['outTransition'] = undefined;
  export let outTransitionConfig: Props['outTransitionConfig'] = undefined;
  export let transition: Props['transition'] = flyAndScale as Props['transition'];
  export let transitionConfig: Props['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialog.Portal>
  <AlertDialog.Overlay />

  <AlertDialogPrimitive.Content
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
  </AlertDialogPrimitive.Content>
</AlertDialog.Portal>
