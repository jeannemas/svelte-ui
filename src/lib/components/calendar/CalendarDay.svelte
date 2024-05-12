<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { styles as buttonStyles } from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CalendarPrimitive.Day>;

  /**
   * The attributes of the day.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the day.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the day.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the day.
   */
  export const styles = tv({
    base: [
      buttonStyles({ variant: 'ghost' }),

      'h-9 w-9 p-0 font-normal ',
      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
      // Selected
      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100',
      'data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground',
      'data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
      // Disabled
      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
      // Unavailable
      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
      // Outside months
      'data-[outside-month]:pointer-events-none data-[outside-month]:text-muted-foreground data-[outside-month]:opacity-50',
      '[&[data-outside-month][data-selected]]:bg-accent/50 [&[data-outside-month][data-selected]]:text-muted-foreground [&[data-outside-month][data-selected]]:opacity-30',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let date: Props['date'];
  export let el: Props['el'] = undefined;
  export let month: Props['month'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CalendarPrimitive.Day
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  date="{date}"
  el="{el}"
  month="{month}"
  let:builder
  let:disabled
  let:selected
  let:unavailable
  on:click
>
  <slot builder="{builder}" disabled="{disabled}" selected="{selected}" unavailable="{unavailable}">
    {date.day}
  </slot>
</CalendarPrimitive.Day>
