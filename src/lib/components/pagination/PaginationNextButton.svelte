<script context="module" lang="ts">
  import { Pagination as PaginationPrimitive } from 'bits-ui';
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import Button from '$lib/components/button/index.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<PaginationPrimitive.NextButton>;

  /**
   * The attributes of the next button.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the next button.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes | 'asChild'>;
  /**
   * The slots of the next button.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the next button.
   */
  export const styles = tv({
    base: ['gap-1 pr-2.5'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<PaginationPrimitive.NextButton asChild let:builder>
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
      <span>Next</span>

      <ChevronRightIcon class="size-4" />
    </slot>
  </Button>
</PaginationPrimitive.NextButton>
