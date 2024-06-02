<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<PaginationPrimitive.NextButton>;

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
    base: [''],
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

<PaginationPrimitive.NextButton
  {...attributes}
  asChild="{asChild}"
  class="{nextButtonStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</PaginationPrimitive.NextButton>
