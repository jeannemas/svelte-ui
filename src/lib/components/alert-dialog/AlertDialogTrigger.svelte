<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<AlertDialogPrimitive.TriggerProps, keyof Attributes>;
  /**
   * The slots of the trigger.
   */
  export type Slots = ComponentSlots<AlertDialogPrimitive.Trigger>;

  /**
   * The styles of the trigger.
   */
  export const styles = tv({
    base: [] as string[],
  });
</script>

<script lang="ts">
  type $$Events = Events<AlertDialogPrimitive.TriggerEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Trigger>
