<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import ChevronLeftIcon from 'lucide-svelte/icons/chevron-left';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import * as Button from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.PrevButton>;

  /**
   * The attributes of the previous button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the previous button.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the previous button.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the previous button.
   */
  export const previousButtonStyles = tv({
    base: [
      Button.rootStyles({
        variant: 'outline',
      }),

      'size-8 bg-transparent p-0 opacity-50',
      'hover:opacity-100',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const headerCtx = headerContext.get();

  if (!$headerCtx) {
    throw new Error('Calendar.PreviousButton must be used within a Calendar.Header component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CalendarPrimitive.PrevButton
  {...attributes}
  asChild="{asChild}"
  class="{previousButtonStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}">
    <ChevronLeftIcon class="size-4" />
  </slot>
</CalendarPrimitive.PrevButton>
