<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ElementEvent } from '$lib/utils/types.js';

  /**
   * The attributes of the input component.
   */
  export type Attributes = Omit<SvelteHTMLElements['input'], 'checked' | 'value'>;
  /**
   * The props of the input component.
   */
  export type Props =
    | {
        /**
         * The value of the input.
         */
        value?: number;
        /**
         * The variant of the input.
         */
        variant: 'number';
      }
    | {
        /**
         * The value of the input.
         */
        value?: string;
        /**
         * The variant of the input.
         */
        variant: 'text';
      };
  /**
   * The slots of the input component.
   */
  export type Slots = Record<never, never>;
  /**
   * The variant of the input component.
   */
  export type Variant = Props['variant'];

  /**
   * The styles of the input.
   */
  export const styles = tv({
    base: [
      'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  });
  /**
   * The styles of the input.
   */
  export const variants = ['number', 'text'] as const satisfies Variant[];
</script>

<script lang="ts">
  type $$Events = {
    blur: ElementEvent<HTMLInputElement, FocusEvent>;
    change: ElementEvent<HTMLInputElement, Event>;
    click: ElementEvent<HTMLInputElement, MouseEvent>;
    focus: ElementEvent<HTMLInputElement, FocusEvent>;
    focusin: ElementEvent<HTMLInputElement, FocusEvent>;
    focusout: ElementEvent<HTMLInputElement, FocusEvent>;
    input: ElementEvent<HTMLInputElement, InputEvent>;
    keydown: ElementEvent<HTMLInputElement, KeyboardEvent>;
    keypress: ElementEvent<HTMLInputElement, KeyboardEvent>;
    keyup: ElementEvent<HTMLInputElement, KeyboardEvent>;
    mouseover: ElementEvent<HTMLInputElement, MouseEvent>;
    mouseenter: ElementEvent<HTMLInputElement, MouseEvent>;
    mouseleave: ElementEvent<HTMLInputElement, MouseEvent>;
    paste: ElementEvent<HTMLInputElement, ClipboardEvent>;
  };
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let value: Props['value'] = undefined;
  export let variant: Props['variant'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

{#if variant === 'number'}
  <input
    type="number"
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
    bind:value="{value}"
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
  />
{:else if variant === 'text'}
  <input
    type="text"
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
    bind:value="{value}"
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
  />
{/if}
