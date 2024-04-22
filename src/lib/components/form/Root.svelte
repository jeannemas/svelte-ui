<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import SuperDebug, { type SuperForm } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes of the form root component.
   */
  export type Attributes = Omit<SvelteHTMLElements['form'], 'method'>;
  /**
   * The Svelte 5 like events of the form root component.
   */
  export type Events = Record<never, never>;
  /**
   * The props of the form root component.
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
    superForm: Pick<SuperForm<Record<string, unknown>>, 'enhance' | 'form'>;
  };
  /**
   * The slots of the form root component.
   */
  export type Slots = {
    default: Record<never, never>;
  };

  /**
   * The styles of the form root.
   */
  export const styles = tv({
    base: [],
  });
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let debug: Props['debug'] = undefined;
  export let superForm: Props['superForm'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<form
  {...attributes}
  class="{styles({
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
