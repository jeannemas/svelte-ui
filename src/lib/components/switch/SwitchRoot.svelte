<script context="module" lang="ts">
  import { Switch as SwitchPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import SwitchThumb from './SwitchThumb.svelte';

  type Primitive = ComponentInfo<SwitchPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = Omit<SvelteHTMLElements['button'], 'disabled' | 'name' | 'value'>;
  /**
   * The props of the root.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the root.
   */
  export const switchStyles = tv({
    base: [
      'peer inline-flex h-6 w-10 shrink-0 cursor-pointer flex-row items-center rounded-full border-2 border-transparent transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary',
      'data-[state=unchecked]:bg-input',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let checked: Props['checked'] = undefined;
  export let disabled: Props['disabled'] = undefined;
  export let el: Props['el'] = undefined;
  export let includeInput: Props['includeInput'] = undefined;
  export let inputAttrs: Props['inputAttrs'] = undefined;
  export let name: Props['name'] = undefined;
  export let onCheckedChange: Props['onCheckedChange'] = undefined;
  export let required: Props['required'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SwitchPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{switchStyles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
  includeInput="{includeInput}"
  inputAttrs="{inputAttrs}"
  name="{name}"
  onCheckedChange="{onCheckedChange}"
  required="{required}"
  value="{value}"
  bind:checked="{checked}"
  let:builder
  on:click
  on:keydown
>
  <slot builder="{builder}">
    <SwitchThumb />
  </slot>
</SwitchPrimitive.Root>
