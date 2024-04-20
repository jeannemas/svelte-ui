<script context="module" lang="ts">
  import { Description, type DescriptionProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  export type Events = Record<never, never>;
  export type Props = Omit<DescriptionProps, keyof Attributes>;
  export type Slots = ComponentSlots<Description>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let id: Props['id'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Description
  {...attributes}
  asChild="{asChild}"
  class="{cn('text-sm text-muted-foreground', attributes.class)}"
  el="{el}"
  id="{id}"
  let:descriptionAttrs
>
  <slot descriptionAttrs="{descriptionAttrs}" />
</Description>
