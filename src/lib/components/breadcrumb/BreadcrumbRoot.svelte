<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['nav'];
  /**
   * The breakpoint of the list.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof rootStyles>['breakpoint']>;
  /**
   * The props of the root.
   */
  export type Props = (
    | {
        asChild: true;
        el: never;
      }
    | {
        asChild?: false;
        el?: HTMLElement;
      }
  ) & {
    /**
     * The breakpoint of the root.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
  };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: {
      builder: AnyObject;
    };
  };

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: [''],
    defaultVariants: {
      breakpoint: 'sm',
    },
    variants: {
      breakpoint: {
        sm: [''],
        md: [''],
        lg: [''],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let breakpoint: Props['breakpoint'] = rootStyles.defaultVariants.breakpoint;
  export let el: Props['el'] = undefined;

  $: attributes = $$restProps as Attributes;

  $: builder = {
    'aria-label': 'breadcrumb',
  };

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    breakpoint,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

{#if asChild}
  <slot builder="{builder}" />
{:else}
  <nav
    {...attributes}
    {...builder}
    class="{rootStyles({
      class: attributes.class,
    })}"
    bind:this="{el}"
  >
    <slot builder="{builder}" />
  </nav>
{/if}
