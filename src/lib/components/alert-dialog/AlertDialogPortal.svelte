<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { portalContext, rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Portal>;

  /**
   * The attributes of the portal.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the portal.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the portal.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the portal.
   */
  export const portalStyles = tv({
    base: [''],
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

  if (!$rootCtx) {
    throw new Error('AlertDialog.Portal must be used within an AlertDialog.Root component.');
  }

  const portalCtx = portalContext.set(writable());

  $: portalCtx.update(($ctx) => ({
    ...$ctx,
    rootContext: $rootCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<AlertDialogPrimitive.Portal
  {...attributes}
  asChild="{asChild}"
  class="{portalStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Portal>
