<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { inputStyles as baseInputStyles } from '$lib/components/input/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.Input>;

  /**
   * The attributes of the input.
   */
  export type Attributes = Omit<SvelteHTMLElements['input'], 'value'>;
  /**
   * The props of the input.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the input.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the input.
   */
  export const inputStyles = tv({
    base: [...baseInputStyles.base],
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
    throw new Error('Combobox.Input must be used within a Combobox.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.Input
  {...attributes}
  asChild="{asChild}"
  class="{inputStyles({
    class: attributes.class,
  })}"
  el="{el}"
  bind:value="{value}"
  let:builder
  let:placeholder
  on:click
  on:input
  on:keydown
>
  <slot builder="{builder}" placeholder="{placeholder}" />
</ComboboxPrimitive.Input>
