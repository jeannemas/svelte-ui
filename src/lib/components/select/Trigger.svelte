<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';
  import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the select trigger component.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The Svelte 5 like events of the select trigger component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the select trigger component.
   */
  export type Props = Omit<SelectPrimitive.TriggerProps, keyof Attributes>;
  /**
   * The slots of the select trigger component.
   */
  export type Slots = ComponentSlots<SelectPrimitive.Trigger>;

  /**
   * The styles of the select trigger.
   */
  export const styles = tv({
    base: [
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      '[&>span]:line-clamp-1',
    ],
  });
</script>

<script lang="ts">
  type $$Events = SelectPrimitive.TriggerEvents;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Trigger
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

  <div>
    <ChevronDownIcon class="h-4 w-4 opacity-50" />
  </div>
</SelectPrimitive.Trigger>
