<script context="module" lang="ts">
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the separator.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the separator.
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
   * The slots of the separator.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the separator.
   */
  export const separatorStyles = tv({
    base: [''],
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
    class="{separatorStyles({
      class: attributes.class,
    })}"
    role="presentation"
    aria-hidden="true"
    bind:this="{el}"
  >
    <slot>
      <ChevronRightIcon />
    </slot>
  </li>
{/if}
