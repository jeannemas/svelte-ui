<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import SuperDebug, { type SuperForm } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the root.
   */
  export type Attributes = Omit<SvelteHTMLElements['form'], 'method'>;
  /**
   * The props of the root.
   */
  export type Props = {
    /**
     * Whether to display the form state in a debug panel underneath the form.
     *
     * @default false
     */
    debug?: boolean;
    /**
     * The SuperForm instance to use.
     */
    superForm: Pick<SuperForm<AnyObject>, 'enhance' | 'form'>;
  };
  /**
   * The slots of the root.
   */
  export type Slots = {
    default: EmptyObject;
  };

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: [''],
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let debug: Props['debug'] = undefined;
  export let superForm: Props['superForm'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<form
  {...attributes}
  class="{rootStyles({
    class: attributes.class,
  })}"
  method="POST"
  use:superForm.enhance
>
  <slot />

  {#if debug}
    <SuperDebug collapsible data="{superForm.form}" status="{false}" />
  {/if}
</form>
