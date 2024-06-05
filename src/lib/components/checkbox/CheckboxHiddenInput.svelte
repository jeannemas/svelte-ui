<script context="module" lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<CheckboxPrimitive.Input>;

  /**
   * The attributes of the hidden input.
   */
  export type Attributes = Omit<SvelteHTMLElements['input'], 'value'>;
  /**
   * The props of the hidden input.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the hidden input.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the hidden input.
   */
  export const hiddenInputStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('Checkbox.HiddenInput must be used within a Checkbox.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The hidden input of the checkbox component.

Must be used within a `Checkbox.Root` component.

### Attributes

Accepts the attributes of a `input` element.

### Events

None.

### Props

- `el` - Bind to the underlying DOM element of the component.

### Slots

None.
-->

<CheckboxPrimitive.Input
  {...attributes}
  class="{hiddenInputStyles({
    class: attributes.class,
  })}"
  el="{el}"
/>
