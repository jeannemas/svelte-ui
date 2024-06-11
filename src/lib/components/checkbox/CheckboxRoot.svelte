<script context="module" lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import CheckboxHiddenInput from './CheckboxHiddenInput.svelte';
  import CheckboxIndicator from './CheckboxIndicator.svelte';
  import { rootContext } from './context.js';

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
    defaultVariants: {
      disabled: false,
    },
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
  export let disabled: Props['disabled'] = rootStyles.defaultVariants.disabled;
  export let el: Props['el'] = undefined;
  export let name: Props['name'] = undefined;
  export let onCheckedChange: Props['onCheckedChange'] = undefined;
  export let required: Props['required'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

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
    <CheckboxHiddenInput />

    <CheckboxIndicator />
  </slot>
</CheckboxPrimitive.Root>
