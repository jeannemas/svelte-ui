<script context="module" lang="ts">
  import type { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo } from '$lib/utils/types.js';

  // TODO remove comment once VaulSvelte typings are fixed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Primitive = ComponentInfo<DrawerPrimitive.Close>;

  /**
   * The attributes of the close.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the close.
   */
  export type Props = Omit<
    DrawerPrimitive.CloseProps, // TODO change to Primitive['props'] once VaulSvelte typings are fixed
    keyof Attributes
  >;
  /**
   * The slots of the close.
   */
  export type Slots = ComponentInfo<DialogPrimitive.Close>['slots']; // TODO change to Primitive['slots'] once VaulSvelte typings are fixed

  /**
   * The styles of the close.
   */
  export const closeStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = DialogPrimitive.CloseEvents; // TODO change to Primitive['events'] once VaulSvelte typings are fixed
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPrimitive.Close
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
</DrawerPrimitive.Close>
