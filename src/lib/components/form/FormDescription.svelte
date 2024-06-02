<script context="module" lang="ts">
  import { Description } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<Description>;

  /**
   * The attributes of the description.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  /**
   * The props of the description.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the description.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the description.
   */
  export const descriptionStyles = tv({
    base: ['text-sm text-muted-foreground'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
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
  class="{descriptionStyles({
    class: attributes.class,
  })}"
  el="{el}"
  id="{id}"
  let:descriptionAttrs
>
  <slot descriptionAttrs="{descriptionAttrs}" />
</Description>
