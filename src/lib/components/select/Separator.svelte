<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the select separator component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The Svelte 5 like events of the select separator component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the select separator component.
   */
  export type Props = Omit<SelectPrimitive.SeparatorProps, keyof Attributes>;
  /**
   * The slots of the select separator component.
   */
  export type Slots = ComponentSlots<SelectPrimitive.Separator>;

  /**
   * The styles of the select separator.
   */
  export const styles = tv({
    base: ['-mx-1 my-1 h-px bg-muted'],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Separator
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</SelectPrimitive.Separator>
