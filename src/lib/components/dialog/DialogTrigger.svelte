<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DialogPrimitive.Trigger>;

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the trigger.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the trigger.
   */
  export const styles = tv({
    base: [] as string[],
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

<DialogPrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}" />
</DialogPrimitive.Trigger>
