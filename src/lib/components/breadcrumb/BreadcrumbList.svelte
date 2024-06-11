<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { listContext, rootContext } from './context.js';

  /**
   * The attributes of the list.
   */
  export type Attributes = SvelteHTMLElements['ol'];
  /**
   * The props of the list.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLOListElement;
      };
  /**
   * The slots of the list.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the list.
   */
  export const listStyles = tv({
    base: [
      'flex flex-row flex-wrap items-center gap-x-2 break-words text-sm text-muted-foreground',
    ],
    variants: {
      breakpoint: {
        sm: ['sm:gap-x-4'],
        md: ['md:gap-x-4'],
        lg: ['lg:gap-x-4'],
      },
    },
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

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Breadcrumb.List must be used within a Breadcrumb.Root component.');
  }

  const listCtx = listContext.set(writable());

  $: listCtx.update(($ctx) => ({
    ...$ctx,
    rootContext: $rootCtx,
  }));

  $: ({
    rootContext: { breakpoint },
  } = $listCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

{#if asChild}
  <slot builder="{builder}" />
{:else}
  <ol
    {...attributes}
    {...builder}
    class="{listStyles({
      breakpoint,
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </ol>
{/if}
