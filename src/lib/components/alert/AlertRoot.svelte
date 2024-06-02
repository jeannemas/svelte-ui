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
     * The variant of the alert.
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
    base: ['rounded-lg border p-4'],
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: ['border-border bg-background text-foreground'],
        destructive: ['border-destructive bg-destructive/5 text-destructive'],
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
  role="alert"
>
  <slot />
</div>
