<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SelectPrimitive.Value>;

  /**
   * The attributes of the value.
   */
  export type Attributes = Omit<SvelteHTMLElements['span'], 'placeholder'>;
  /**
   * The props of the value.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the value.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the value.
   */
  export const valueStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let placeholder: Props['placeholder'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Value
  {...attributes}
  asChild="{asChild}"
  class="{valueStyles({
    class: attributes.class,
  })}"
  el="{el}"
  placeholder="{placeholder}"
  let:attrs
  let:label
>
  <slot attrs="{attrs}" label="{label}" />
</SelectPrimitive.Value>
