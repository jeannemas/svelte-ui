<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import * as Dialog from '$lib/components/dialog/index.js';
  import { cn } from '$lib/utils/cn.js';
  import type { ComponentInfo, Transition } from '$lib/utils/types.js';

  import CommandRoot, { type Props as CommandRootProps } from './CommandRoot.svelte';

  type Primitive<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = ComponentInfo<
    CommandPrimitive.Dialog<
      TContentTransition,
      TContentTransitionIn,
      TContentTransitionOut,
      TOverlayTransition,
      TOverlayTransitionIn,
      TOverlayTransitionOut
    >
  >;

  /**
   * The attributes of the dialog.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the dialog.
   */
  export type Props<
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  > = Pick<Primitive['props'], 'open'> &
    CommandRootProps & {
      dialogContentAttributesAndProps?: Dialog.ContentAttributes &
        Dialog.ContentProps<
          TContentTransition,
          TContentTransitionIn,
          TContentTransitionOut,
          TOverlayTransition,
          TOverlayTransitionIn,
          TOverlayTransitionOut
        >;
      dialogRootAttributesAndProps?: Dialog.RootAttributes & Omit<Dialog.RootProps, 'open'>;
    };
  /**
   * The slots of the dialog.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the dialog.
   */
  export const dialogStyles = tv({
    base: [
      '[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
      '[&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0',
      '[&_[data-cmdk-group]]:px-2',
      '[&_[data-cmdk-input]]:h-12',
      '[&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3',
    ],
  });
</script>

<script
  generics="
    TContentTransition extends Transition = Transition,
    TContentTransitionIn extends Transition = Transition,
    TContentTransitionOut extends Transition = Transition,
    TOverlayTransition extends Transition = Transition,
    TOverlayTransitionIn extends Transition = Transition,
    TOverlayTransitionOut extends Transition = Transition,
  "
  lang="ts"
>
  type $$Events = Primitive['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<
    TContentTransition,
    TContentTransitionIn,
    TContentTransitionOut,
    TOverlayTransition,
    TOverlayTransitionIn,
    TOverlayTransitionOut
  >;

  export let asChild: TypedProps['asChild'] = undefined;
  export let dialogContentAttributesAndProps: TypedProps['dialogContentAttributesAndProps'] =
    undefined;
  export let dialogRootAttributesAndProps: TypedProps['dialogRootAttributesAndProps'] = undefined;
  export let filter: TypedProps['filter'] = undefined;
  export let ids: TypedProps['ids'] = undefined;
  export let label: TypedProps['label'] = undefined;
  export let loop: TypedProps['loop'] = undefined;
  export let onKeydown: TypedProps['onKeydown'] = undefined;
  export let onValueChange: TypedProps['onValueChange'] = undefined;
  export let open: TypedProps['open'] = undefined;
  export let value: TypedProps['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Dialog.Root {...dialogRootAttributesAndProps} bind:open="{open}">
  <Dialog.Content
    {...dialogContentAttributesAndProps}
    class="{cn('overflow-hidden p-0', dialogContentAttributesAndProps?.class)}"
  >
    <CommandRoot
      {...attributes}
      asChild="{asChild}"
      class="{dialogStyles({
        class: attributes.class,
      })}"
      filter="{filter}"
      ids="{ids}"
      label="{label}"
      loop="{loop}"
      onKeydown="{onKeydown}"
      onValueChange="{onValueChange}"
      bind:value="{value}"
    >
      <slot />
    </CommandRoot>
  </Dialog.Content>
</Dialog.Root>
