<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { itemContext, listContext } from './context.js';

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the item.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLLIElement;
      };
  /**
   * The slots of the item.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: ['inline-flex flex-row items-center gap-x-2'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  $: builder = {};

  const listCtx = listContext.get();

  if (!$listCtx) {
    throw new Error('Breadcrumb.Item must be used within a Breadcrumb.List component.');
  }

  const itemCtx = itemContext.set(writable());

  itemCtx.update(($ctx) => ({
    ...$ctx,
    listContext: $listCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

{#if asChild}
  <slot builder="{builder}" />
{:else}
  <li
    {...attributes}
    {...builder}
    class="{itemStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </li>
{/if}
