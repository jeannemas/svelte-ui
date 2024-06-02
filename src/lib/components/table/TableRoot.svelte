<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes for the root.
   */
  export type Attributes = SvelteHTMLElements['table'];
  /**
   * The props for the root.
   */
  export type Props = {
    /**
     * Whether or not the rows should be hoverable.
     *
     * @default false
     */
    hoverable?: boolean;
  } & {
    wrapperAttributes?: SvelteHTMLElements['div'];
  };
  /**
   * The slots for the root.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles for the root.
   */
  export const rootStyles = tv({
    base: ['w-full caption-bottom text-sm'],
    defaultVariants: {
      hoverable: false,
    },
    variants: {
      hoverable: {
        true: [''],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let hoverable: Props['hoverable'] = rootStyles.defaultVariants.hoverable;
  export let wrapperAttributes: Props['wrapperAttributes'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($rootCtx) => ({
    ...$rootCtx,
    hoverable,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<div {...wrapperAttributes} class="{cn('relative w-full overflow-auto', wrapperAttributes?.class)}">
  <table
    {...attributes}
    class="{rootStyles({
      class: attributes.class,
    })}"
  >
    <slot />
  </table>
</div>
