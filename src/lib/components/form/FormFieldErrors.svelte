<script context="module" lang="ts">
  import { FieldErrors } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentInfo } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<FieldErrors>;

  /**
   * The attributes of the field errors.
   */
  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  /**
   * The props of the field errors.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes> & {
    errorClasses?: string | null;
  };
  /**
   * The slots of the field errors.
   */
  export type Slots = Primitive['slots'];

  /**
   * The styles of the field errors.
   */
  export const fieldErrorsStyles = tv({
    base: ['text-sm font-medium text-red-500'],
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let asChild: Props['asChild'] = undefined;
  export let el: Props['el'] = undefined;
  export let errorClasses: Props['errorClasses'] = undefined;
  export let id: Props['id'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<FieldErrors
  {...attributes}
  asChild="{asChild}"
  class="{fieldErrorsStyles({
    class: attributes.class,
  })}"
  el="{el}"
  id="{id}"
  let:errorAttrs
  let:errors
  let:fieldErrorsAttrs
>
  <slot errorAttrs="{errorAttrs}" errors="{errors}" fieldErrorsAttrs="{fieldErrorsAttrs}">
    {#each errors as error}
      <div {...errorAttrs} class="{cn(errorClasses)}">
        {error}
      </div>
    {/each}
  </slot>
</FieldErrors>
