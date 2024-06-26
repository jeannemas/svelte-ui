<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.HiddenInput>;

  /**
   * The attributes of the hidden input.
   */
  export type Attributes = Omit<SvelteHTMLElements['input'], 'value'>;
  /**
   * The props of the hidden input.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the hidden input.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the hidden input.
   */
  export const hiddenInputStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Combobox.HiddenInput must be used within a Combobox.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.HiddenInput
  {...attributes}
  asChild="{asChild}"
  class="{hiddenInputStyles({
    class: attributes.class,
  })}"
  el="{el}"
  bind:value="{value}"
  let:builder
>
  <slot builder="{builder}" />
</ComboboxPrimitive.HiddenInput>
