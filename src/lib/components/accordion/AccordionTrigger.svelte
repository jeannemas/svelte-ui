<script context="module" lang="ts">
  import { Accordion as AccordionPrimitive } from 'bits-ui';
  import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  import { headerContext } from './context.js';

  type Primitive = ComponentInfo<AccordionPrimitive.Trigger>;

  /**
   * The attributes of the trigger.
   */
  export type Attributes = SvelteHTMLElements['button'];
  /**
   * The props of the trigger.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the trigger.
   */
  export type Slots = {
    default: Primitive['slots']['default'];
    icon: {
      /**
       * Whether the trigger is disabled.
       */
      isDisabled: boolean;
      /**
       * Whether the item is open.
       */
      isOpen: boolean;
    };
  };

  /**
   * The styles of the trigger.
   */
  export const triggerStyles = tv({
    base: [
      'flex shrink grow basis-0 flex-row items-center justify-between py-4 font-medium transition-all',
    ],
    defaultVariants: {
      disabled: false,
    },
    variants: {
      disabled: {
        false: ['hover:underline'],
        true: ['cursor-default'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  const headerCtx = headerContext.get();

  if (!headerCtx) {
    throw new Error('Accordion.Trigger must be used within an Accordion.Header component.');
  }

  $: ({ itemDisabled, rootDisabled } = $headerCtx!);
  $: isDisabled = (rootDisabled || itemDisabled) ?? false;
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

The trigger for the item.

Must be used within an `Accordion.Header` component.

### Attributes

Accepts the attributes of a `button` element.

### Events

- `click` - Dispatched when the trigger is clicked.
- `keydown` - Dispatched when a key is pressed down on the trigger.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
- `icon` - The icon slot.
  - `isDisabled` - Whether the trigger is disabled.
  - `isOpen` - Whether the item is open.
-->

<AccordionPrimitive.Trigger
  {...attributes}
  asChild="{asChild}"
  class="{triggerStyles({
    class: attributes.class,
    disabled: isDisabled,
  })}"
  el="{el}"
  let:builder
  on:click
  on:keydown
>
  {@const isOpen = builder['data-state'] === 'open'}

  <slot builder="{builder}" />

  <slot isDisabled="{isDisabled}" isOpen="{isOpen}" name="icon">
    {#if !isDisabled}
      <ChevronDownIcon
        class="{cn('size-4 transition-transform duration-200', isOpen && 'rotate-180')}"
      />
    {/if}
  </slot>
</AccordionPrimitive.Trigger>
