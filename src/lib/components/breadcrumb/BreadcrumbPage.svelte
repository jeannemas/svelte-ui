<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  /**
   * The attributes of the page.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the page.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLSpanElement;
      };
  /**
   * The slots of the page.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the page.
   */
  export const pageStyles = tv({
    base: ['font-normal text-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  $: builder = {
    role: 'link',
    'aria-current': 'page' as const,
    'aria-disabled': true,
  };

  const itemCtx = itemContext.get();

  if (!itemCtx) {
    throw new Error('Breadcrumb.Page must be used within a Breadcrumb.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

A page of a breadcrumb item component.

Must be used within a `Breadcrumb.Item` component.

### Attributes

Accepts the attributes of an `span` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
-->

{#if asChild}
  <slot builder="{builder}" />
{:else}
  <span
    {...attributes}
    {...builder}
    class="{pageStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </span>
{/if}
