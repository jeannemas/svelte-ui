<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the description.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the description.
   */
  export type Props = EmptyObject;
  /**
   * The slots of the description.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the description.
   */
  export const descriptionStyles = tv({
    base: ['text-sm'],
    variants: {
      variant: {
        danger: ['text-red-500'],
        default: ['text-foreground'],
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
    throw new Error('Alert.Description must be used within an Alert.Root component.');
  }

  $: ({ variant } = $rootCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<div
  {...attributes}
  class="{descriptionStyles({
    class: attributes.class,
    variant,
  })}"
>
  <slot />
</div>
