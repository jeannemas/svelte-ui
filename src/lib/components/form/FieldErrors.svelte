<script context="module" lang="ts">
  import { FieldErrors, type FieldErrorsProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Omit<SvelteHTMLElements['div'], 'id'>;
  export type Events = Record<never, never>;
  export type Props = Omit<FieldErrorsProps, keyof Attributes> & {
    errorClasses?: string | null;
  };
  export type Slots = ComponentSlots<FieldErrors>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
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
  class="{cn('text-sm font-medium text-destructive', attributes.class)}"
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
