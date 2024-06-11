<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  import { buttonStyles as topNavigationButtonStyles } from './TopNavigationButton.svelte';
  import { rootContext } from './context.js';

  /**
   * The attributes for the link.
   */
  export type Attributes = Omit<SvelteHTMLElements['a'], 'href'>;
  /**
   * The props for the link.
   */
  export type Props = {
    /**
     * Whether the link is active.
     */
    active?: boolean;
    /**
     * The URL of the link.
     */
    href: string;
  };
  /**
   * The slots for the link.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the link.
   */
  export const linkStyles = tv({
    base: [...topNavigationButtonStyles.base],
    defaultVariants: {
      ...topNavigationButtonStyles.defaultVariants,
    },
    variants: {
      ...topNavigationButtonStyles.variants,
      active: {
        true: ['border-primary'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let active: Props['active'] = undefined;
  export let href: Props['href'];

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.get();

  if (!$rootCtx) {
    throw new Error('TopNavigation.Link must be used within a TopNavigation.Root component.');
  }

  $: ({ breakpoint } = $rootCtx);
</script>

<!-- <style lang="postcss">
</style> -->

<a
  {...attributes}
  class="{linkStyles({
    active,
    breakpoint,
    class: attributes.class,
  })}"
  href="{href}"
>
  <slot />
</a>
