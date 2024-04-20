<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';
  import type { ElementEvent } from '$lib/utils/types.js';

  export type Attributes = Omit<SvelteHTMLElements['textarea'], 'readonly' | 'value'>;
  export type Events = Record<never, never>;
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
  export type Slots = Record<never, never>;
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
  type $$Props = Attributes & Events & Props;
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
  class="{cn(
    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    attributes.class,
  )}"
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
