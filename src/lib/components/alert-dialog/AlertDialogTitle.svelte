<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, HeadingLevel } from '$lib/utils/types.js';

  /**
   * The attributes of the title.
   */
  export type Attributes<THeadingLevel extends HeadingLevel = 'h3'> =
    SvelteHTMLElements[THeadingLevel];
  /**
   * The props of the title.
   */
  export type Props = Omit<AlertDialogPrimitive.TitleProps, keyof Attributes>;
  /**
   * The slots of the title.
   */
  export type Slots = ComponentSlots<AlertDialogPrimitive.Title>;

  /**
   * The styles of the title.
   */
  export const styles = tv({
    base: ['text-lg font-semibold'],
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h3'" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = TypedAttributes & Props;
  type $$Slots = Slots;
  type TypedAttributes = Attributes<THeadingLevel>;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let level: Props['level'] = 'h3' as Props['level'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<AlertDialogPrimitive.Title
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  level="{level}"
  let:builder
>
  <slot builder="{builder}" />
</AlertDialogPrimitive.Title>
