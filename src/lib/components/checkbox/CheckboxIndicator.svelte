<script context="module" lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import MinusIcon from 'lucide-svelte/icons/minus';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CheckboxPrimitive.Indicator>;

  /**
   * The attributes of the indicator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the indicator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the indicator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the indicator.
   */
  export const indicatorStyles = tv({
    base: ['flex size-4 flex-row items-center justify-center text-current'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CheckboxPrimitive.Indicator
  {...attributes}
  asChild="{asChild}"
  class="{indicatorStyles({
    class: attributes?.class,
  })}"
  el="{el}"
  let:attrs
  let:isChecked
  let:isIndeterminate
>
  <slot attrs="{attrs}" isChecked="{isChecked}" isIndeterminate="{isIndeterminate}">
    {#if isChecked}
      <CheckIcon class="size-4" />
    {:else if isIndeterminate}
      <MinusIcon class="size-4" />
    {/if}
  </slot>
</CheckboxPrimitive.Indicator>
