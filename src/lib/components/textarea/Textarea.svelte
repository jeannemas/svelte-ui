<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv } from 'tailwind-variants';

  import type { ElementEvent, EmptyObject } from '$lib/utils/types.js';

  /**
   * The attributes of the textarea.
   */
  export type Attributes = Omit<SvelteHTMLElements['textarea'], 'readonly' | 'value'>;
  /**
   * The props of the textarea.
   */
  export type Props = {
    /**
     * Whether the textarea is read-only.
     *
     * @default false
     */
    readonly?: SvelteHTMLElements['textarea']['readonly'];
    /**
     * The value of the textarea.
     */
    value?: Exclude<SvelteHTMLElements['textarea']['value'], number | string[]>;
  };
  /**
   * The slots of the textarea.
   */
  export type Slots = EmptyObject;

  /**
   * The styles of the textarea.
   */
  export const textareaStyles = tv({
    base: [
      'flex min-h-24 w-full flex-row rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  });
</script>

<script lang="ts">
  type $$Events = {
    blur: ElementEvent<HTMLTextAreaElement, FocusEvent>;
    change: ElementEvent<HTMLTextAreaElement, Event>;
    click: ElementEvent<HTMLTextAreaElement, MouseEvent>;
    focus: ElementEvent<HTMLTextAreaElement, FocusEvent>;
    input: ElementEvent<HTMLTextAreaElement, InputEvent>;
    keydown: ElementEvent<HTMLTextAreaElement, KeyboardEvent>;
    keypress: ElementEvent<HTMLTextAreaElement, KeyboardEvent>;
    keyup: ElementEvent<HTMLTextAreaElement, KeyboardEvent>;
    mouseover: ElementEvent<HTMLTextAreaElement, MouseEvent>;
    mouseenter: ElementEvent<HTMLTextAreaElement, MouseEvent>;
    mouseleave: ElementEvent<HTMLTextAreaElement, MouseEvent>;
    paste: ElementEvent<HTMLTextAreaElement, ClipboardEvent>;
  };
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  // Workaround for https://github.com/sveltejs/svelte/issues/9305
  // Fixed in Svelte 5, but not backported to 4.x.
  export let readonly: Props['readonly'] = undefined;
  export let value: Props['value'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<textarea
  {...attributes}
  class="{textareaStyles({
    class: attributes.class,
  })}"
  readonly="{readonly}"
  bind:value="{value}"
  on:blur
  on:change
  on:click
  on:focus
  on:input
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
></textarea>
