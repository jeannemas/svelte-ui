<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import SuperDebug, { type SuperForm } from 'sveltekit-superforms';

  export type Attributes = Omit<SvelteHTMLElements['form'], 'method'>;
  export type Events = Record<never, never>;
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
  export type Slots = {
    default: Record<never, never>;
  };
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

<form {...attributes} method="POST" use:superForm.enhance>
  <slot />

  {#if debug}
    <SuperDebug collapsible data="{superForm.form}" status="{false}" />
  {/if}
</form>
