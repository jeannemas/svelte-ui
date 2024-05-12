<script context="module" lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DrawerPrimitive.NestedRoot>;

  /**
   * The attributes of the nested root.
   */
  export type Attributes = EmptyObject;
  /**
   * The props of the nested root.
   */
  export type Props = Omit<Primitive['props'], 'backgroundColor' | 'preventScroll'>;
  /**
   * The slots of the nested root.
   */
  export type Slots = Primitive['slots'];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let activeSnapPoint: Props['activeSnapPoint'] = undefined;
  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let closeThreshold: Props['closeThreshold'] = undefined;
  export let direction: Props['direction'] = undefined;
  export let dismissible: Props['dismissible'] = undefined;
  export let fadeFromIndex: Props['fadeFromIndex'] = undefined;
  export let nested: Props['nested'] = undefined;
  export let onActiveSnapPointChange: Props['onActiveSnapPointChange'] = undefined;
  export let onClose: Props['onClose'] = undefined;
  export let onDrag: Props['onDrag'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let onRelease: Props['onRelease'] = undefined;
  export let open: Props['open'] = false;
  export let openFocus: Props['openFocus'] = undefined;
  export let portal: Props['portal'] = undefined;
  export let scrollLockTimeout: Props['scrollLockTimeout'] = undefined;
  export let shouldScaleBackground: Props['shouldScaleBackground'] = true;
  export let snapPoints: Props['snapPoints'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DrawerPrimitive.NestedRoot
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  closeThreshold="{closeThreshold}"
  direction="{direction}"
  dismissible="{dismissible}"
  fadeFromIndex="{fadeFromIndex}"
  nested="{nested}"
  onActiveSnapPointChange="{onActiveSnapPointChange}"
  onClose="{onClose}"
  onDrag="{onDrag}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  onRelease="{onRelease}"
  openFocus="{openFocus}"
  portal="{portal}"
  scrollLockTimeout="{scrollLockTimeout}"
  shouldScaleBackground="{shouldScaleBackground}"
  snapPoints="{snapPoints}"
  bind:activeSnapPoint="{activeSnapPoint}"
  bind:open="{open}"
>
  <slot />
</DrawerPrimitive.NestedRoot>
