<script context="module" lang="ts">
  import ChevronRightIcon from 'lucide-svelte/icons/chevron-right';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { listContext } from './context.js';

  /**
   * The attributes of the separator.
   */
  export type Attributes = SvelteHTMLElements['li'];
  /**
   * The props of the separator.
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
   * The slots of the separator.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the separator.
   */
  export const separatorStyles = tv({
    base: [''],
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

  const listCtx = listContext.get();

  if (!listCtx) {
    throw new Error('Breadcrumb.Separator must be used within a Breadcrumb.List component.');
  }
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

A separator of the breadcrumb component.

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
    class="{separatorStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}">
      <ChevronRightIcon />
    </slot>
  </li>
{/if}
