<script context="module" lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo, HeadingLevel } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<DialogPrimitive.Title>;

  /**
   * The attributes of the title.
   */
  export type Attributes = SvelteHTMLElements[HeadingLevel];
  /**
   * The props of the title.
   */
  export type Props<THeadingLevel extends HeadingLevel = 'h2'> = Omit<
    Primitive['props'],
    keyof Attributes | 'level'
  > & {
    level?: THeadingLevel;
  };
  /**
   * The slots of the title.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the title.
   */
  export const titleStyles = tv({
    base: ['text-lg font-semibold leading-none tracking-tight'],
  });
</script>

<script generics="THeadingLevel extends HeadingLevel = 'h2'" lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots;
  type TypedProps = Props<THeadingLevel>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let level: TypedProps['level'] = 'h2' as TypedProps['level'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<DialogPrimitive.Title
  {...attributes}
  asChild="{asChild}"
  class="{titleStyles({
    class: attributes.class,
  })}"
  el="{el}"
  level="{level}"
  let:builder
>
  <slot builder="{builder}" />
</DialogPrimitive.Title>
