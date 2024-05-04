<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { styles as buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the next button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the next button.
   */
  export type Props = Omit<CalendarPrimitive.NextButtonProps, keyof Attributes>;
  /**
   * The slots of the next button.
   */
  export type Slots = ComponentSlots<CalendarPrimitive.NextButton>;

  /**
   * The styles of the next button.
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
  type $$Events = Events<CalendarPrimitive.NextButtonEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.NextButton
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
    <ChevronRightIcon class="h-4 w-4" />
  </slot>
</CalendarPrimitive.NextButton>
