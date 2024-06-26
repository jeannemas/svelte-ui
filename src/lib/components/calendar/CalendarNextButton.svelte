<script context="module" lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import * as Button from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

  type Primitive = ComponentInfo<CalendarPrimitive.NextButton>;

  /**
   * The attributes of the next button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the next button.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the next button.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the next button.
   */
  export const nextButtonStyles = tv({
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
    throw new Error('Calendar.NextButton must be used within a Calendar.Header component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CalendarPrimitive.NextButton
  {...attributes}
  asChild="{asChild}"
  class="{nextButtonStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
  on:click
>
  <slot builder="{builder}">
    <ChevronRightIcon class="size-4" />
  </slot>
</CalendarPrimitive.NextButton>
