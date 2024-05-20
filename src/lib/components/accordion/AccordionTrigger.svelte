<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<AccordionPrimitive.Trigger>;

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> & {
    headerAttributesAndProps?: ComponentInfo<AccordionPrimitive.Header>['props'];
  };
  /**
   * The slots of the trigger.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the trigger.
   */
  export const styles = tv({
    base: [
      'flex flex-1 items-center justify-between py-4 font-medium transition-all',
      'hover:underline',
      '[&[data-state=open]>svg]:rotate-180',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let headerAttributesAndProps: Props['headerAttributesAndProps'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AccordionPrimitive.Header
  {...headerAttributesAndProps}
  class="{cn('flex', headerAttributesAndProps?.class)}"
>
  <AccordionPrimitive.Trigger
    {...attributes}
    asChild="{asChild}"
    class="{styles({
      class: attributes.class,
    })}"
    el="{el}"
    let:builder
    on:click
    on:keydown
  >
    <slot builder="{builder}" />

    <ChevronDownIcon class="h-4 w-4 transition-transform duration-200" />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
