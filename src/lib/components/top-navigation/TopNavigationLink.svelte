<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { EmptyObject, Slot } from '$lib/utils/types.js';

  import { styles as buttonStyles } from './TopNavigationButton.svelte';
  import type { Props as RootProps } from './TopNavigationRoot.svelte';

  /**
   * The attributes for the link.
   */
  export type Attributes = Omit<SvelteHTMLElements['a'], 'href'>;
  /**
   * The props for the link.
   */
  export type Props = Pick<RootProps, 'breakpoint'> & {
    /**
     * The URL of the link.
     */
    href: string;
    /**
     * Whether the link is active.
     */
    isActive?: boolean;
  };
  /**
   * The slots for the link.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the link.
   */
  export const styles = tv({
    ...buttonStyles,
    base: [...buttonStyles.base, 'data-[active=true]:border-primary'],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = undefined;
  export let href: Props['href'];
  export let isActive: Props['isActive'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<a
  {...attributes}
  class="{styles({
    breakpoint,
    class: attributes.class,
  })}"
  href="{href}"
  data-active="{isActive}"
  data-breakpoint="{breakpoint}"
>
  <slot />
</a>
