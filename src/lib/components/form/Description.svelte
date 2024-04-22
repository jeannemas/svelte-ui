<script context="module" lang="ts">
  import { Description, type DescriptionProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots } from '$lib/utils/types.js';

  /**
   * The attributes of the Description component.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  /**
   * The Svelte 5 like events of the Description component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the Description component.
   */
  export type Props = Omit<DescriptionProps, keyof Attributes>;
  /**
   * The slots of the Description component.
   */
  export type Slots = ComponentSlots<Description>;

  /**
   * The styles of the Description.
   */
  export const styles = tv({
    base: ['text-sm text-muted-foreground'],
  });
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
  class="{styles({
    class: attributes.class,
  })}"
  el="{el}"
  id="{id}"
  let:descriptionAttrs
>
  <slot descriptionAttrs="{descriptionAttrs}" />
</Description>
