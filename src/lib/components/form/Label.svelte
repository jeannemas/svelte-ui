<script context="module" lang="ts">
  import { getFormControl, type LabelAttrs } from 'formsnap';
  import type { Readable } from 'svelte/store';

  import Label, {
    type Attributes as LabelAttributes,
    type Props as LabelProps,
  } from '$lib/components/label/index.js';
  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = LabelAttributes;
  export type Events = Record<never, never>;
  export type Props = LabelProps;
  export type Slots = {
    default: ComponentSlots<Label>['default'] & {
      labelAttrs: Readable<LabelAttrs>;
    };
  };
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{cn('data-[fs-error]:text-destructive', attributes.class)}"
  el="{el}"
  let:builder
>
  <slot builder="{builder}" labelAttrs="{labelAttrs}" />
</Label>
