<script context="module" lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the trigger.
   */
  export type Attributes = Omit<SvelteHTMLElements['button'], 'disabled' | 'value'>;
  /**
   * The props of the trigger.
   */
  export type Props = Omit<TabsPrimitive.TriggerProps, keyof Attributes>;
  /**
   * The slots of the trigger.
   */
  export type Slots = ComponentSlots<TabsPrimitive.Trigger>;

  /**
   * The styles of the trigger.
   */
  export const styles = tv({
    base: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    ],
  });
</script>

<script lang="ts">
  type $$Events = TabsPrimitive.TriggerEvents;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let value: Props['value'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TabsPrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  value="{value}"
  let:builder
  on:click
  on:focus
  on:keydown
>
  <slot builder="{builder}" />
</TabsPrimitive.Trigger>
