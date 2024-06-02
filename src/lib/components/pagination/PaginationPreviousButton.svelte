<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<PaginationPrimitive.PrevButton>;

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

<PaginationPrimitive.PrevButton
  {...attributes}
  asChild="{asChild}"
  class="{previousButtonStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" />
</PaginationPrimitive.PrevButton>
