<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import CircleIcon from 'lucide-svelte/icons/circle';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.RadioIndicator>;

  /**
   * The attributes of the radio indicator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the radio indicator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the radio indicator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the radio indicator.
   */
  export const radioIndicatorStyles = tv({
    base: ['absolute left-2 flex size-4 flex-row items-center justify-center'],
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

<DropdownMenuPrimitive.RadioIndicator
  {...attributes}
  asChild="{asChild}"
  class="{radioIndicatorStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:attrs
  let:checked
>
  <slot attrs="{attrs}" checked="{checked}">
    <CircleIcon class="size-2 fill-current" />
  </slot>
</DropdownMenuPrimitive.RadioIndicator>
