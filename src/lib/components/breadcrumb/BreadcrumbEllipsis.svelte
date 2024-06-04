<script context="module" lang="ts">
  import EllipsisIcon from 'lucide-svelte/icons/ellipsis';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { itemContext } from './context.js';

  /**
   * The attributes of the ellipsis.
   */
  export type Attributes = SvelteHTMLElements['span'];
  /**
   * The props of the ellipsis.
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
   * The slots of the ellipsis.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the ellipsis.
   */
  export const ellipsisStyles = tv({
    base: ['flex size-8 flex-row items-center justify-center'],
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
    role: 'presentation',
    'aria-hidden': true,
  };

  const itemCtx = itemContext.get();

  if (!itemCtx) {
    throw new Error('Breadcrumb.Ellipsis must be used within a Breadcrumb.Item component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

An ellipsis of a breadcrumb item component.

Must be used within a `Breadcrumb.Item` component.

### Attributes

Accepts the attributes of a `span` element.

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
    class="{ellipsisStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}">
      <EllipsisIcon class="size-4" />

      <span class="sr-only">More</span>
    </slot>
  </span>
{/if}
