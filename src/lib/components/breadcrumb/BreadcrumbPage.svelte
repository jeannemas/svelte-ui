<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the page.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the page.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLSpanElement;
      };
  /**
   * The slots of the page.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the page.
   */
  export const pageStyles = tv({
    base: ['font-normal text-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

{#if asChild}
  <slot />
{:else}
  <span
    {...attributes}
    class="{pageStyles({
      class: attributes.class,
    })}"
    role="link"
    aria-current="page"
    aria-disabled="true"
    bind:this="{el}"
  >
    <slot />
  </span>
{/if}
