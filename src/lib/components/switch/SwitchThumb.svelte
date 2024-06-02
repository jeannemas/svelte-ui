<script context="module" lang="ts">
  import { Switch as SwitchPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SwitchPrimitive.Thumb>;

  /**
   * The attributes of the thumb.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the thumb.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the thumb.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the thumb.
   */
  export const thumbStyles = tv({
    base: [
      'pointer-events-none block size-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
      'data-[state=checked]:translate-x-5',
      'data-[state=unchecked]:translate-x-0',
    ],
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

<SwitchPrimitive.Thumb
  {...attributes}
  asChild="{asChild}"
  class="{thumbStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
  let:checked
>
  <slot attrs="{attrs}" checked="{checked}" />
</SwitchPrimitive.Thumb>
