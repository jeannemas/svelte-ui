<script context="module" lang="ts">
  import { Command as CommandPrimitive } from 'cmdk-sv';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<CommandPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
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
  export const rootStyles = tv({
    base: ['flex flex-col overflow-hidden rounded-md bg-popover text-popover-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let filter: Props['filter'] = undefined;
  export let ids: Props['ids'] = undefined;
  export let label: Props['label'] = undefined;
  export let loop: Props['loop'] = undefined;
  export let onKeydown: Props['onKeydown'] = undefined;
  export let onValueChange: Props['onValueChange'] = undefined;
  export let shouldFilter: Props['shouldFilter'] = undefined;
  export let state: Props['state'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- @component -->

<CommandPrimitive.Root
  {...attributes}
  asChild="{asChild}"
  class="{rootStyles({
    class: attributes.class,
  })}"
  filter="{filter}"
  ids="{ids}"
  label="{label}"
  loop="{loop}"
  onKeydown="{onKeydown}"
  onValueChange="{onValueChange}"
  shouldFilter="{shouldFilter}"
  state="{state}"
  bind:value="{value}"
  let:label
  let:root
  let:state
  let:stateStore
>
  <slot label="{label}" root="{root}" state="{state}" stateStore="{stateStore}" />
</CommandPrimitive.Root>
