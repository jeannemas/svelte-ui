<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import { flyAndScale } from '$lib/transition/flyAndScale.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import { contentContext, portalContext } from './context.js';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    AlertDialogPrimitive.Content<TContentTransition, TContentTransitionIn, TContentTransitionOut>
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
      'fixed left-1/2 top-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-4 shadow-lg',
    ],
    variants: {
      breakpoint: {
        sm: ['sm:max-w-lg'],
        md: ['md:max-w-xl'],
        lg: ['lg:max-w-2xl'],
      },
      variant: {
        danger: ['border-red-500 bg-red-50'],
        default: ['border-border bg-background'],
      },
    },
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
  export let transition: TypedProps['transition'] = flyAndScale as TypedProps['transition'];
  export let transitionConfig: TypedProps['transitionConfig'] = undefined;

  $: attributes = $$restProps as Attributes;

  const portalCtx = portalContext.get();

  if (!portalCtx) {
    throw new Error('AlertDialog.Content must be used within an AlertDialog.Portal component.');
  }

  const contentCtx = contentContext.set(writable());

  $: contentCtx.update(($ctx) => ({
    ...$ctx,
    ...$portalCtx,
  }));

  $: ({ rootBreakpoint, rootVariant } = $contentCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The content of the alert dialog.

Must be used within an `AlertDialog.Portal` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

- `pointerdown`
- `pointermove`
- `pointerup`
- `touchcancel`
- `touchend`
- `touchmove`
- `touchstart`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.
- `inTransition` - A transition function to use during the in transition. If provided, this will override the `transition` function.
- `inTransitionConfig` - The configuration to pass to the `inTransition` function.
- `outTransition` - A transition function to use during the out transition. If provided, this will override the `transition` function.
- `outTransitionConfig` - The configuration to pass to the `outTransition` function.
- `transition` - A transition function to use during both the in and out transitions.
- `transitionConfig` - TThe configuration to pass to the `transition` function.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

<AlertDialogPrimitive.Content
  {...attributes}
  asChild="{asChild}"
  class="{contentStyles({
    breakpoint: rootBreakpoint,
    class: attributes.class,
    variant: rootVariant,
  })}"
  el="{el}"
  inTransition="{inTransition}"
  inTransitionConfig="{inTransitionConfig}"
  outTransition="{outTransition}"
  outTransitionConfig="{outTransitionConfig}"
  transition="{transition}"
  transitionConfig="{transitionConfig}"
  let:builder
  on:pointerdown
  on:pointermove
  on:pointerup
  on:touchcancel
  on:touchend
  on:touchmove
  on:touchstart
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Content>
