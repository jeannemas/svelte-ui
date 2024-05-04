<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive, type PageItem } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = Omit<PaginationPrimitive.Props, keyof Attributes | 'asChild'>;
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: Omit<ComponentSlots<PaginationPrimitive.Root>['default'], 'pages'> & {
      currentPage: number | undefined;
      pages: PageItem[];
    };
  };

  /**
   * The styles of the root.
   */
  export const styles = tv({
    base: ['mx-auto flex w-full flex-col items-center'],
  });
</script>

<script lang="ts">
  type $$Events = Events<PaginationPrimitive.Events>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let count: Props['count'];
  export let el: Props['el'] = undefined;
  export let onPageChange: Props['onPageChange'] = undefined;
  export let page: Props['page'] = 1;
  export let perPage: Props['perPage'] = 10;
  export let siblingCount: Props['siblingCount'] = 1;

  $: attributes = $$restProps as Attributes;
  $: currentPage = page;
</script>

<!-- <style lang="postcss">
</style> -->

<PaginationPrimitive.Root
  {...attributes}
  asChild
  count="{count}"
  el="{el}"
  onPageChange="{onPageChange}"
  perPage="{perPage}"
  siblingCount="{siblingCount}"
  bind:page="{page}"
  let:builder
  let:pages
  let:range
>
  <nav
    {...builder}
    class="{styles({
      class: attributes.class,
    })}"
    use:builder.action
  >
    <slot builder="{builder}" currentPage="{currentPage}" pages="{pages}" range="{range}" />
  </nav>
</PaginationPrimitive.Root>