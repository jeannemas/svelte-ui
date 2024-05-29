<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo } from '$lib/utils/types.js';

  // TODO remove comment once VaulSvelte typings are fixed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type Primitive = ComponentInfo<DrawerPrimitive.Trigger>;

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<
    DialogPrimitive.TriggerProps, // TODO change to Primitive['props'] once VaulSvelte typings are fixed
    keyof Attributes
  >;
  /**
   * The slots of the trigger.
   */
  export type Slots = ComponentInfo<DrawerPrimitive.Trigger>['slots']; // TODO change to Primitive['slots'] once VaulSvelte typings are fixed

  /**
   * The styles of the trigger.
   */
  export const styles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = DialogPrimitive.TriggerEvents; // TODO change to Primitive['events'] once VaulSvelte typings are fixed
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</DrawerPrimitive.Trigger>
