<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props = Record<never, never>;
  export type Slots = {
    default: Record<never, never>;
  };
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<div
  {...attributes}
  class="{cn(
    'mt-4 flex flex-col space-y-4',
    'sm:flex-row sm:space-x-4 sm:space-y-0',
    attributes.class,
  )}"
>
  <slot />
</div>
