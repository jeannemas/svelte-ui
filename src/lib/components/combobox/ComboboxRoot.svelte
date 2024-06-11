<script context="module" lang="ts">
  import { Combobox as ComboboxPrimitive } from 'bits-ui';
  import { writable } from 'svelte/store';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive<TItem, TMultiple extends boolean = false> = ComponentInfo<
    ComboboxPrimitive.Root<TItem, TMultiple>
  >;

  /**
   * The attributes of the root.
   */
  export type Attributes = EmptyObject;
  /**
   * The props of the root.
   */
  export type Props<TItem, TMultiple extends boolean = false> = Omit<
    Primitive<TItem, TMultiple>['props'],
    'highlightOnHover' | 'scrollAlignment'
  >;
  /**
   * The slots of the root.
   */
  export type Slots<TItem, TMultiple extends boolean = false> = Primitive<
    TItem,
    TMultiple
  >['slots'];
</script>

<script generics="TItem, TMultiple extends boolean = false" lang="ts">
  type $$Events = Primitive<TItem, TMultiple>['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TItem, TMultiple>;
  type TypedProps = Props<TItem, TMultiple>;

  export let closeOnEscape: TypedProps['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: TypedProps['closeOnOutsideClick'] = undefined;
  export let disabled: TypedProps['disabled'] = undefined;
  export let inputValue: TypedProps['inputValue'] = undefined;
  export let items: TypedProps['items'] = undefined;
  export let loop: TypedProps['loop'] = undefined;
  export let multiple: TypedProps['multiple'] = undefined;
  export let name: TypedProps['name'] = undefined;
  export let onOpenChange: TypedProps['onOpenChange'] = undefined;
  export let onOutsideClick: TypedProps['onOutsideClick'] = undefined;
  export let onSelectedChange: TypedProps['onSelectedChange'] = undefined;
  export let open: TypedProps['open'] = undefined;
  export let portal: TypedProps['portal'] = undefined;
  export let preventScroll: TypedProps['preventScroll'] = undefined;
  export let required: TypedProps['required'] = undefined;
  export let selected: TypedProps['selected'] = undefined;
  export let touchedInput: TypedProps['touchedInput'] = undefined;

  // $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<ComboboxPrimitive.Root
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  disabled="{disabled}"
  items="{items}"
  loop="{loop}"
  multiple="{multiple}"
  name="{name}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  onSelectedChange="{onSelectedChange}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  required="{required}"
  bind:inputValue="{inputValue}"
  bind:open="{open}"
  bind:selected="{selected}"
  bind:touchedInput="{touchedInput}"
  let:ids
>
  <slot ids="{ids}" />
</ComboboxPrimitive.Root>
