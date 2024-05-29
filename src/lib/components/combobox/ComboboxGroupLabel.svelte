<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { labelStyles as selectLabelStyles } from '$lib/components/select/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<ComboboxPrimitive.GroupLabel>;

  /**
   * The attributes of the group label.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the group label.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the group label.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the group label.
   */
  export const groupLabelStyles = tv({
    base: [...selectLabelStyles.base],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<ComboboxPrimitive.GroupLabel
  {...attributes}
  asChild="{asChild}"
  class="{groupLabelStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</ComboboxPrimitive.GroupLabel>
