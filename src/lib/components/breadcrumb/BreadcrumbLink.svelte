<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  /**
   * The attributes of the link.
   */
  export type Attributes = Omit<SvelteHTMLElements['a'], 'href'>;
  /**
   * The props of the link.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
        href: never;
      }
    | {
        asChild?: false;
        el?: HTMLAnchorElement;
        href: string;
      };
  /**
   * The slots of the link.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the link.
   */
  export const linkStyles = tv({
    base: ['transition-colors', 'hover:text-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let href: Props['href'];

  $: attributes = $$restProps as Attributes;

  $: builder = {};

  const itemCtx = itemContext.get();

  if (!$itemCtx) {
    throw new Error('Breadcrumb.Link must be used within a Breadcrumb.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

{#if asChild}
  <slot builder="{builder}" />
{:else}
  <a
    {...attributes}
    {...builder}
    class="{linkStyles({
      class: attributes.class,
    })}"
    href="{href}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </a>
{/if}
