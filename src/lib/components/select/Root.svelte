<script context="module" lang="ts">
  import { Select as SelectPrimitive } from 'bits-ui';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Record<never, never>;
  export type Events<TItem, TMultiple extends boolean = false> = Pick<
    SelectPrimitive.Props<TItem, TMultiple>,
    'onOpenChange' | 'onOutsideClick' | 'onSelectedChange'
  >;
  export type Props<TItem, TMultiple extends boolean = false> = Omit<
    SelectPrimitive.Props<TItem, TMultiple>,
    | keyof Attributes
    | keyof Events<TItem, TMultiple>

    // The following props are not supported in the root component
    | 'highlightOnHover'
    | 'scrollAlignment'
    | 'typeahead'
  >;
  export type Slots<TItem, TMultiple extends boolean = false> = ComponentSlots<
    SelectPrimitive.Root<TItem, TMultiple>
  >;
</script>

<script generics="TItem, TMultiple extends boolean = false" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & TypedEvents & TypedProps;
  type $$Slots = TypedSlots;
  type TypedEvents = Events<TItem, TMultiple>;
  type TypedProps = Props<TItem, TMultiple>;
  type TypedSlots = Slots<TItem, TMultiple>;

  export let closeOnEscape: TypedProps['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: TypedProps['closeOnOutsideClick'] = undefined;
  export let disabled: TypedProps['disabled'] = undefined;
  export let items: TypedProps['items'] = undefined;
  export let loop: TypedProps['loop'] = undefined;
  export let multiple: TypedProps['multiple'] = undefined;
  export let name: TypedProps['name'] = undefined;
  export let open: TypedProps['open'] = undefined;
  export let portal: TypedProps['portal'] = undefined;
  export let preventScroll: TypedProps['preventScroll'] = undefined;
  export let required: TypedProps['required'] = undefined;
  export let selected: TypedProps['selected'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SelectPrimitive.Root
  {...attributes}
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  disabled="{disabled}"
  items="{items}"
  loop="{loop}"
  multiple="{multiple}"
  name="{name}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  required="{required}"
  bind:open="{open}"
  bind:selected="{selected}"
  let:ids
>
  <slot ids="{ids}" />
</SelectPrimitive.Root>
