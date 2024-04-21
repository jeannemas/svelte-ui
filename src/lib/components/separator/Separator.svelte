<script context="module" lang="ts">
  import { Separator as SeparatorPrimitive } from 'bits-ui';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props = Omit<SeparatorPrimitive.Props, keyof Attributes>;
  export type Slots = ComponentSlots<SeparatorPrimitive.Root>;

  export const defaultOrientation = 'horizontal' as const;
  export const orientations = ['horizontal', 'vertical'] as const satisfies Props['orientation'][];
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'my-4 h-[1px] w-full' : 'mx-4 h-full w-[1px]',
    attributes.class,
  )}"
  decorative="{decorative}"
  el="{el}"
  orientation="{orientation}"
  let:builder
>
  <slot builder="{builder}" />
</SeparatorPrimitive.Root>
