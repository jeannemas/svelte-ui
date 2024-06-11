<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes for the row.
   */
  export type Attributes = SvelteHTMLElements['tr'] & {
    'data-state'?: unknown;
  };
  /**
   * The props for the row.
   */
  export type Props = EmptyObject;
  /**
   * The slots for the row.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the row.
   */
  export const rowStyles = tv({
    base: ['border-b transition-colors', 'data-[state=selected]:bg-muted'],
    variants: {
      hoverable: {
        true: ['hover:bg-muted/50'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Table.Row must be used within a Table.Root component.');
  }

  $: ({ hoverable } = $rootCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<tr
  {...attributes}
  class="{rowStyles({
    class: attributes.class,
    hoverable,
  })}"
  on:click
  on:keydown
>
  <slot />
</tr>
