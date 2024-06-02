<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.SubTrigger>;

  /**
   * The attributes of the sub trigger.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the sub trigger.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> & {
    inset?: boolean;
  };
  /**
   * The slots of the sub trigger.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the sub trigger.
   */
  export const subTriggerStyles = tv({
    base: [
      'flex cursor-default select-none flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    ],
    defaultVariants: {
      inset: false,
    },
    variants: {
      inset: {
        true: ['pl-8'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let inset: Props['inset'] = subTriggerStyles.defaultVariants.inset;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.SubTrigger
  {...attributes}
  asChild="{asChild}"
  class="{subTriggerStyles({
    class: attributes.class,
    inset,
  })}"
  disabled="{disabled}"
  el="{el}"
  let:builder
  on:click
  on:focusin
  on:focusout
  on:keydown
  on:pointerenter
  on:pointerleave
  on:pointermove
>
  <slot builder="{builder}" />

  <ChevronRightIcon class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>
