<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the root.
   */
  export type Props = {
    /**
     * The variant of the root.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: EmptyObject;
  };
  /**
   * The variant of the root.
   */
  export type Variant = NonNullable<VariantProps<typeof rootStyles>['variant']>;

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: ['flex flex-col gap-y-4 rounded-lg border p-4 shadow-sm'],
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        danger: ['border-red-500 bg-red-50 text-red-500'],
        default: ['border-border bg-card text-card-foreground'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let variant: Props['variant'] = rootStyles.defaultVariants.variant;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{rootStyles({
    class: attributes.class,
    variant,
  })}"
>
  <slot />
</div>
