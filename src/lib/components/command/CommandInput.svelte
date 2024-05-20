<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import SearchIcon from 'lucide-svelte/icons/search';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Input>;

  /**
   * The attributes of the input.
   */
  export type Attributes = Omit<SvelteHTMLElements['input'], 'value'>;
  /**
   * The props of the input.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the input.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the input.
   */
  export const styles = tv({
    base: [
      'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div class="flex items-center border-b px-2" data-cmdk-input-wrapper="">
  <SearchIcon class="mr-2 h-4 w-4 shrink-0 opacity-50" />

  <CommandPrimitive.Input
    {...attributes}
    asChild="{asChild}"
    class="{styles({
      class: attributes.class,
    })}"
    el="{el}"
    bind:value="{value}"
    on:blur
    on:change
    on:focus
    on:input
    on:keydown
    let:action
    let:attrs
  >
    <slot action="{action}" attrs="{attrs}" />
  </CommandPrimitive.Input>
</div>
