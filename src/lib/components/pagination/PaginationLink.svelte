<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import * as Button from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<PaginationPrimitive.Page>;

  /**
   * The attributes of the link.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the link.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> &
    Omit<Button.RootProps, 'variant'> & {
      isActive?: boolean;
    };
  /**
   * The slots of the link.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the link.
   */
  export const linkStyles = tv({
    base: [...Button.rootStyles.base],
    defaultVariants: {
      ...Button.rootStyles.defaultVariants,
    },
    variants: {
      ...Button.rootStyles.variants,
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
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
  class="{linkStyles({
    class: attributes.class,
    size,
    variant,
  })}"
  el="{el}"
  page="{page}"
  let:builder
  on:click
>
  <slot builder="{builder}" />
</PaginationPrimitive.Page>
