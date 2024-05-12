<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

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
    default: Slot;
  };

  /**
   * The styles of the link.
   */
  export const styles = tv({
    base: ['transition-colors hover:text-foreground'],
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
</script>

<!-- <style lang="postcss">
</style> -->

{#if asChild}
  <slot />
{:else}
  <a
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
    href="{href}"
    bind:this="{el}"
  >
    <slot />
  </a>
{/if}
