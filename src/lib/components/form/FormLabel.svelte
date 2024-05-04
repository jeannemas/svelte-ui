<script context="module" lang="ts">
  import { getFormControl, type LabelAttrs } from 'formsnap';
  import type { Readable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import Label, {
    type Attributes as LabelAttributes,
    type Props as LabelProps,
  } from '$lib/components/label/index.js';
  import type { ComponentSlots, Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the label.
   */
  export type Attributes = LabelAttributes;
  /**
   * The props of the label.
   */
  export type Props = LabelProps;
  /**
   * The slots of the label.
   */
  export type Slots = {
    default: Slot<
      ComponentSlots<Label>['default'] & {
        labelAttrs: Readable<LabelAttrs>;
      }
    >;
  };

  /**
   * The styles of the label.
   */
  export const styles = tv({
    base: ['data-[fs-error]:text-destructive'],
  });
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const { labelAttrs } = getFormControl();
</script>

<!-- <style lang="postcss">
</style> -->

<Label
  {...attributes}
  {...$labelAttrs}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" labelAttrs="{labelAttrs}" />
</Label>
