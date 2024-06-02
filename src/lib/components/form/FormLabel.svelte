<script context="module" lang="ts">
  import { getFormControl, getFormField, type LabelAttrs } from 'formsnap';
  import type { Readable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import Label, {
    type Attributes as LabelAttributes,
    type Props as LabelProps,
    type Slots as LabelSlots,
  } from '$lib/components/label/index.js';
  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the label.
   */
  export type Attributes = LabelAttributes;
  /**
   * The props of the label.
   */
  export type Props = Omit<LabelProps, 'required'>;
  /**
   * The slots of the label.
   */
  export type Slots = {
    default: LabelSlots['default'] & {
      labelAttrs: Readable<LabelAttrs>;
    };
  };

  /**
   * The styles of the label.
   */
  export const labelStyles = tv({
    base: ['data-[fs-error]:text-destructive'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  $: ({ labelAttrs } = getFormControl());
  $: ({ constraints } = getFormField());
</script>

<!-- <style lang="postcss">
</style> -->

<Label
  {...attributes}
  {...$labelAttrs}
  {...$constraints}
  asChild="{asChild}"
  class="{labelStyles({
    class: attributes.class,
  })}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" labelAttrs="{labelAttrs}" />
</Label>
