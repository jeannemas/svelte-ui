<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import ChevronLeftIcon from 'lucide-svelte/icons/chevron-left';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { styles as buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the previous button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the previous button.
   */
  export type Props = Omit<CalendarPrimitive.PrevButtonProps, keyof Attributes>;
  /**
   * The slots of the previous button.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.PrevButton>;

  /**
   * The styles of the previous button.
   */
  export const styles = tv({
    base: [
      buttonStyles({ variant: 'outline' }),

      'h-7 w-7 bg-transparent p-0 opacity-50',
      'hover:opacity-100',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Events<CalendarPrimitive.PrevButtonEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.PrevButton
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}">
    <ChevronLeftIcon class="h-4 w-4" />
  </slot>
</CalendarPrimitive.PrevButton>
