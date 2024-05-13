<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<CommandPrimitive.Loading>;

  /**
   * The attributes of the loading.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the loading.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the loading.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the loading.
   */
  export const styles = tv({
    base: [] as string[],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let progress: Props['progress'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<CommandPrimitive.Loading
  {...attributes}
  asChild="{asChild}"
  class="{styles({
    class: attributes.class,
  })}"
  progress="{progress}"
  let:attrs
>
  <slot attrs="{attrs}" />
</CommandPrimitive.Loading>
