<script context="module" lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import MinusIcon from 'lucide-svelte/icons/minus';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import CheckboxHiddenInput from './CheckboxHiddenInput.svelte';
  import CheckboxIndicator from './CheckboxIndicator.svelte';

  type Primitive = ComponentInfo<CheckboxPrimitive.Root>;

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
  export const rootStyles = tv({
    base: [
      'peer box-content size-4 shrink-0 rounded-sm border border-primary ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    ],
    defaultVariants: {},
    variants: {
      disabled: {
        true: ['cursor-not-allowed opacity-50'],
      },
    },
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
  export let name: Props['name'] = undefined;
  export let onCheckedChange: Props['onCheckedChange'] = undefined;
  export let required: Props['required'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CheckboxPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{rootStyles({
    class: attributes.class,
  })}"
  disabled="{disabled}"
  el="{el}"
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
    <CheckboxHiddenInput name="{name}" />

    <CheckboxIndicator let:isChecked let:isIndeterminate>
      {#if isChecked}
        <CheckIcon class="size-4" />
      {:else if isIndeterminate}
        <MinusIcon class="size-4" />
      {/if}
    </CheckboxIndicator>
  </slot>
</CheckboxPrimitive.Root>
