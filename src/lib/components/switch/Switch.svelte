<script context="module" lang="ts">
  import { Switch as SwitchPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the switch component.
   */
  export type Attributes = Omit<SvelteHTMLElements['button'], 'disabled' | 'name' | 'value'>;
  /**
   * The props of the switch component.
   */
  export type Props = Omit<SwitchPrimitive.Props, keyof Attributes>;
  /**
   * The slots of the switch component.
   */
  export type Slots = ComponentSlots<SwitchPrimitive.Root>;

  /**
   * The styles of the switch.
   */
  export const styles = tv({
    base: [
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary',
      'data-[state=unchecked]:bg-input',
    ],
  });
</script>

<script lang="ts">
  type $$Events = SwitchPrimitive.Events;
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
  class="{styles({
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
    <SwitchPrimitive.Thumb
      class="{cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
        'data-[state=checked]:translate-x-5',
        'data-[state=unchecked]:translate-x-0',
      )}"
    />
  </slot>
</SwitchPrimitive.Root>
