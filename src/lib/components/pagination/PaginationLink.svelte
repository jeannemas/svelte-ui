<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import {
    styles as buttonStyles,
    type Props as ButtonProps,
  } from '$lib/components/button/index.js';
  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the link.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the link.
   */
  export type Props = Omit<PaginationPrimitive.PageProps, keyof Attributes> &
    Omit<ButtonProps, 'variant'> & {
      isActive?: boolean;
    };
  /**
   * The slots of the link.
   */
  export type Slots = ComponentSlots<PaginationPrimitive.Page>;

  /**
   * The styles of the link.
   */
  export const styles = tv({
    ...buttonStyles,
  });
</script>

<script lang="ts">
  type $$Events = Events<PaginationPrimitive.PageEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let isActive: Props['isActive'] = undefined;
  export let page: Props['page'];
  export let size: Props['size'] = undefined;

  $: attributes = $$restProps as Attributes;
  $: variant = isActive ? ('outline' as const) : ('ghost' as const);
</script>

<!-- <style lang="postcss">
</style> -->

<PaginationPrimitive.Page
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
    size,
    variant,
  })}"
  el="{el}"
  page="{page}"
  data-size="{size}"
  data-variant="{variant}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</PaginationPrimitive.Page>
