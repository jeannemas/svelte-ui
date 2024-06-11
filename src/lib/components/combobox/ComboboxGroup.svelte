<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import { groupStyles as selectGroupStyles } from '$lib/components/select/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { contentContext, groupContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.Group>;

  /**
   * The attributes of the group.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the group.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the group.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the group.
   */
  export const groupStyles = tv({
    base: [...selectGroupStyles.base],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const contentCtx = contentContext.get();

  if (!$contentCtx) {
    throw new Error('Combobox.Group must be used within a Combobox.Content component.');
  }

  const groupCtx = groupContext.set(writable());

  $: groupCtx.update(($ctx) => ({
    ...$ctx,
    contentContext: $contentCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.Group
  {...attributes}
  asChild="{asChild}"
  class="{groupStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</ComboboxPrimitive.Group>
