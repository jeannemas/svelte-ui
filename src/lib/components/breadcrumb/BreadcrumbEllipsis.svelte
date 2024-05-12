<script context="module" lang="ts">
  import Ellipsis from 'lucide-svelte/icons/ellipsis';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the ellipsis.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the ellipsis.
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
   * The slots of the ellipsis.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the ellipsis.
   */
  export const styles = tv({
    base: ['flex h-9 w-9 items-center justify-center'],
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
    class="{styles({
      class: attributes.class,
    })}"
    role="presentation"
    aria-hidden="true"
    bind:this="{el}"
  >
    <slot>
      <Ellipsis class="h-4 w-4" />

      <span class="sr-only">More</span>
    </slot>
  </span>
{/if}
