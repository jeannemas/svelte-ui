<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.Label>;

  /**
   * The attributes of the label.
   */
  export type Attributes = SvelteHTMLElements['label'];
  /**
   * The props of the label.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the label.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the label.
   */
  export const labelStyles = tv({
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

  const itemCtx = itemContext.get();

  if (!$itemCtx) {
    throw new Error('Combobox.Label must be used within a Combobox.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.Label
  {...attributes}
  asChild="{asChild}"
  class="{labelStyles({
    class: attributes.class,
  })}"
  el="{el}"
>
  <slot />
</ComboboxPrimitive.Label>
