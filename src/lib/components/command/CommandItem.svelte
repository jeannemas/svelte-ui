<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Item>;

  /**
   * The attributes of the item.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  /**
   * The props of the item.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the item.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the item.
   */
  export const styles = tv({
    base: [
      'relative flex cursor-default select-none flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'aria-selected:bg-accent aria-selected:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let alwaysRender: Props['alwaysRender'] = undefined;
  export let asChild: Props['asChild'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let id: Props['id'] = undefined;
  export let onSelect: Props['onSelect'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CommandPrimitive.Item
  {...attributes}
  alwaysRender="{alwaysRender}"
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  id="{id}"
  onSelect="{onSelect}"
  bind:value="{value}"
  let:action
  let:attrs
>
  <slot action="{action}" attrs="{attrs}" />
</CommandPrimitive.Item>
