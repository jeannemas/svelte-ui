<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the select value component.
   */
  export type Attributes = Omit<SvelteHTMLElements['span'], 'placeholder'>;
  /**
   * The Svelte 5 like events of the select value component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the select value component.
   */
  export type Props = Omit<SelectPrimitive.ValueProps, keyof Attributes>;
  /**
   * The slots of the select value component.
   */
  export type Slots = ComponentSlots<SelectPrimitive.Value>;

  /**
   * The styles of the select value.
   */
  export const styles = tv({
    base: [],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  placeholder="{placeholder}"
  let:attrs
  let:label
>
  <slot attrs="{attrs}" label="{label}" />
</SelectPrimitive.Value>
