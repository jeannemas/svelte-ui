<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { buttonStyles, type RootProps } from './index.js';

  /**
   * The attributes for the link element.
   */
  export type Attributes = Omit<SvelteHTMLElements['a'], 'href'>;
  /**
   * The props for the link element.
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
   * The slots for the link element.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles for the link element.
   */
  export const styles = tv({
    base: ['data-[active=true]:border-primary'],
    extend: buttonStyles,
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
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
>
  <slot />
</a>
