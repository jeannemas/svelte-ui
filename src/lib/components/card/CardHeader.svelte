<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { headerContext, rootContext } from './context.js';

  /**
   * The attributes of the header.
   */
  export type Attributes = SvelteHTMLElements['header'];
  /**
   * The props of the header.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the header.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the header.
   */
  export const headerStyles = tv({
    base: ['flex flex-col gap-y-2'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('Card.Header must be used within a Card.Root component.');
  }

  const headerCtx = headerContext.set(writable());

  $: headerCtx.update(($ctx) => ({
    ...$ctx,
    rootContext: $rootCtx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<header
  {...attributes}
  class="{headerStyles({
    class: attributes.class,
  })}"
>
  <slot />
</header>
