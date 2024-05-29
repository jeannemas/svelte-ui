<script context="module" lang="ts">
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DropdownMenuPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = EmptyObject;
  /**
   * The direction of the root.
   */
  export type Dir = NonNullable<VariantProps<typeof styles>['dir']>;
  /**
   * The props of the root.
   */
  export type Props = Primitive['props'];
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the root.
   */
  export const styles = tv({
    defaultVariants: {
      dir: 'ltr',
    },
    variants: {
      dir: {
        ltr: [''],
        rtl: [''],
      },
    },
  });
  /**
   * The default direction of the root.
   */
  export const defaultDir = styles.defaultVariants.dir!;
  /**
   * The directions of the root.
   */
  export const dirs = Object.keys(styles.variants.dir) as [Dir, ...Dir[]];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnItemClick: Props['closeOnItemClick'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let dir: Props['dir'] = undefined;
  export let disableFocusFirstItem: Props['disableFocusFirstItem'] = undefined;
  export let loop: Props['loop'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let portal: Props['portal'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;
  export let typeahead: Props['typeahead'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DropdownMenuPrimitive.Root
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnItemClick="{closeOnItemClick}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  dir="{dir}"
  disableFocusFirstItem="{disableFocusFirstItem}"
  loop="{loop}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  typeahead="{typeahead}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</DropdownMenuPrimitive.Root>
