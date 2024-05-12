<script context="module" lang="ts">
  import { Separator as SeparatorPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<SeparatorPrimitive.Root>;

  /**
   * The attributes of the separator.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The orientation of the separator.
   */
  export type Orientation = NonNullable<VariantProps<typeof styles>['orientation']>;
  /**
   * The props of the separator.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the separator.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the separator.
   */
  export const styles = tv({
    base: ['shrink-0 bg-border'],
    defaultVariants: {
      orientation: 'horizontal',
    },
    variants: {
      orientation: {
        horizontal: ['my-4 h-px w-full'],
        vertical: ['mx-4 h-full w-px'],
      },
    },
  });
  /**
   * The default orientation of the separator.
   */
  export const defaultOrientation = styles.defaultVariants.orientation!;
  /**
   * The orientations of the separator.
   */
  export const orientations = Object.keys(styles.variants.orientation) as [
    Orientation,
    ...Orientation[],
  ];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let decorative: Props['decorative'] = undefined;
  export let el: Props['el'] = undefined;
  export let orientation: Props['orientation'] = defaultOrientation;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<SeparatorPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
    orientation,
  })}"
  decorative="{decorative}"
  el="{el}"
  orientation="{orientation}"
  data-orientation="{orientation}"
  let:builder
>
  <slot builder="{builder}" />
</SeparatorPrimitive.Root>
