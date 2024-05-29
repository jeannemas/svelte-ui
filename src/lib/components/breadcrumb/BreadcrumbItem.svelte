<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

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
    default: Slot;
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
</script>

<!-- <style lang="postcss">
</style> -->

{#if asChild}
  <slot />
{:else}
  <li
    {...attributes}
    class="{itemStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot />
  </li>
{/if}
