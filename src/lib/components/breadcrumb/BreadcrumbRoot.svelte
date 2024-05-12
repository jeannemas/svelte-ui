<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['nav'];
  /**
   * The props of the root.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLElement;
      };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles of the root.
   */
  export const styles = tv({
    base: [] as string[],
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
  <nav
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
    aria-label="breadcrumb"
    bind:this="{el}"
  >
    <slot />
  </nav>
{/if}
