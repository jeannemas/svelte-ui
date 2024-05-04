<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import Button from '$lib/components/button/index.js';
  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the previous button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the previous button.
   */
  export type Props = Omit<PaginationPrimitive.PrevButtonProps, keyof Attributes | 'asChild'>;
  /**
   * The slots of the previous button.
   */
  export type Slots = ComponentSlots<PaginationPrimitive.PrevButton>;

  /**
   * The styles of the previous button.
   */
  export const styles = tv({
    base: ['gap-1 pl-2.5'],
  });
</script>

<script lang="ts">
  type $$Events = Events<PaginationPrimitive.PrevButtonEvents>;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<PaginationPrimitive.PrevButton asChild let:builder>
  <Button
    {...attributes}
    builders="{[builder]}"
    class="{styles({
      class: attributes.class,
    })}"
    el="{el}"
    variant="ghost"
    on:click
  >
    <slot builder="{builder}">
      <ChevronLeft class="h-4 w-4" />

      <span>Previous</span>
    </slot>
  </Button>
</PaginationPrimitive.PrevButton>
