<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { itemContext, listContext } from './context.js';

  /**
   * The attributes of the item.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the item.
   */
  export type Props =
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLLIElement;
      };
  /**
   * The slots of the item.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the item.
   */
  export const itemStyles = tv({
    base: ['inline-flex flex-row items-center gap-x-2'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  $: builder = {};

  const listCtx = listContext.get();

  if (!listCtx) {
    throw new Error('Breadcrumb.Item must be used within a Breadcrumb.List component.');
  }

  const itemCtx = itemContext.set(writable());

  itemCtx.update(($ctx) => ({
    ...$ctx,
    ...$listCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

An item of the breadcrumb component.

Must be used within a `Breadcrumb.List` component.

### Attributes

Accepts the attributes of a `li` element.

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
  <li
    {...attributes}
    {...builder}
    class="{itemStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </li>
{/if}
