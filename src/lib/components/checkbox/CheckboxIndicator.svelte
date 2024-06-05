<script context="module" lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import CheckIcon from 'lucide-svelte/icons/check';
  import MinusIcon from 'lucide-svelte/icons/minus';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<CheckboxPrimitive.Indicator>;

  /**
   * The attributes of the indicator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the indicator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the indicator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the indicator.
   */
  export const indicatorStyles = tv({
    base: ['flex size-4 flex-row items-center justify-center text-current'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!rootCtx) {
    throw new Error('Checkbox.Indicator must be used within a Checkbox.Root component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The indicator of the checkbox component.

Must be used within a `Checkbox.Root` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `attrs` - The attributes of the indicator.
  - `isChecked` - Whether the checkbox is checked.
  - `isIndeterminate` - Whether the checkbox is in an indeterminate state.
-->

<CheckboxPrimitive.Indicator
  {...attributes}
  asChild="{asChild}"
  class="{indicatorStyles({
    class: attributes?.class,
  })}"
  el="{el}"
  let:attrs
  let:isChecked
  let:isIndeterminate
>
  <slot attrs="{attrs}" isChecked="{isChecked}" isIndeterminate="{isIndeterminate}">
    {#if isChecked}
      <CheckIcon class="size-4" />
    {:else if isIndeterminate}
      <MinusIcon class="size-4" />
    {/if}
  </slot>
</CheckboxPrimitive.Indicator>
