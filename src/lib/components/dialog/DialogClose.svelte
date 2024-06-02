<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DialogPrimitive.Close>;

  /**
   * The attributes of the close.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the close.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the close.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the close.
   */
  export const closeStyles = tv({
    base: [
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
      'hover:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none',
      'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
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

<DialogPrimitive.Close
  {...attributes}
  asChild="{asChild}"
  class="{closeStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</DialogPrimitive.Close>
