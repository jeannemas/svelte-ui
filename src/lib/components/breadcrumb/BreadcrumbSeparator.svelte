<script context="module" lang="ts">
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

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
  export const styles = tv({
    base: ['[&>svg]:size-3.5'],
  });
</script>

<script lang="ts">
  type $$Events = Events;
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
    class="{styles({
      class: attributes.class,
    })}"
    role="presentation"
    aria-hidden="true"
    bind:this="{el}"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
{/if}
