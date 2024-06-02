<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Separator>;

  /**
   * The attributes of the separator.
   */
  export type Attributes = SvelteHTMLElements['div'];
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
  export const separatorStyles = tv({
    base: ['-mx-1 h-px bg-border'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let alwaysRender: Props['alwaysRender'] = undefined;
  export let asChild: Props['asChild'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CommandPrimitive.Separator
  {...attributes}
  alwaysRender="{alwaysRender}"
  asChild="{asChild}"
  class="{separatorStyles({
    class: attributes.class,
  })}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CommandPrimitive.Separator>
