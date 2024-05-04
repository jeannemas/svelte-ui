<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the portal.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the portal.
   */
  export type Props = Omit<AlertDialogPrimitive.PortalProps, keyof Attributes>;
  /**
   * The slots of the portal.
   */
  export type Slots = ComponentSlots<AlertDialogPrimitive.Portal>;

  /**
   * The styles of the portal.
   */
  export const styles = tv({
    base: [] as string[],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Portal
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Portal>
