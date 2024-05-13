<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Group>;

  /**
   * The attributes of the group.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the group.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the group.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the group.
   */
  export const styles = tv({
    base: [
      'overflow-hidden p-1 text-foreground',
      '[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:py-1.5 [&_[data-cmdk-group-heading]]:text-xs [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground',
    ],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let alwaysRender: Props['alwaysRender'] = undefined;
  export let asChild: Props['asChild'] = undefined;
  export let heading: Props['heading'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CommandPrimitive.Group
  {...attributes}
  alwaysRender="{alwaysRender}"
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  heading="{heading}"
  bind:value="{value}"
  let:container
  let:group
  let:heading
>
  <slot container="{container}" group="{group}" heading="{heading}" />
</CommandPrimitive.Group>
