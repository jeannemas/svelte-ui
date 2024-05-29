<script context="module" lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<TabsPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The orientation of the root.
   */
  export type Orientation = NonNullable<VariantProps<typeof styles>['orientation']>;
  /**
   * The props of the root.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the root.
   */
  export const styles = tv({
    base: [''],
    defaultVariants: {
      orientation: 'horizontal',
    },
    variants: {
      orientation: {
        horizontal: [''],
        vertical: [''],
      },
    },
  });
  /**
   * The default orientation of the root.
   */
  export const defaultOrientation = styles.defaultVariants.orientation!;
  /**
   * The orientations of the root.
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

  export let activateOnFocus: Props['activateOnFocus'] = undefined;
  export let asChild: Props['asChild'] = undefined;
  export let autoSet: Props['autoSet'] = undefined;
  export let el: Props['el'] = undefined;
  export let loop: Props['loop'] = undefined;
  export let onValueChange: Props['onValueChange'] = undefined;
  export let orientation: Props['orientation'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<TabsPrimitive.Root
  {...attributes}
  activateOnFocus="{activateOnFocus}"
  asChild="{asChild}"
  autoSet="{autoSet}"
  class="{styles({
    class: attributes.class,
    orientation,
  })}"
  el="{el}"
  loop="{loop}"
  onValueChange="{onValueChange}"
  orientation="{orientation}"
  bind:value="{value}"
  let:builder
  let:value
>
  <slot builder="{builder}" value="{value}" />
</TabsPrimitive.Root>
