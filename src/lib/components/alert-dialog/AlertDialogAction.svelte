<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Action>;

  /**
   * The attributes of the action.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the action.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the action.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the action.
   */
  export const actionStyles = tv({
    base: [...buttonStyles.base],
    defaultVariants: {
      ...buttonStyles.defaultVariants,
    },
    variants: {
      ...buttonStyles.variants,
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('AlertDialog.Action must be used within an AlertDialog.Root component.');
  }

  $: ({ variant } = $rootCtx!);
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Action
  {...attributes}
  asChild="{asChild}"
  class="{actionStyles({
    class: attributes.class,
    size: 'default',
    variant,
  })}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Action>
