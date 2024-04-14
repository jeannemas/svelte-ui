<script context="module" lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = Omit<SvelteHTMLElements['input'], 'checked' | 'value'>;
  export type Events = Record<never, never>;
  export type Props =
    | {
        value?: number;
        variant: 'number';
      }
    | {
        value?: string;
        variant: 'text';
      };
  export type Slots = Record<never, never>;
  export type Variant = Props['variant'];

  type FormInputEvent<TEvent extends Event = Event> = TEvent & {
    currentTarget: EventTarget & HTMLInputElement;
  };
</script>

<script lang="ts">
  type $$Events = {
    blur: FormInputEvent<FocusEvent>;
    change: FormInputEvent<Event>;
    click: FormInputEvent<MouseEvent>;
    focus: FormInputEvent<FocusEvent>;
    focusin: FormInputEvent<FocusEvent>;
    focusout: FormInputEvent<FocusEvent>;
    keydown: FormInputEvent<KeyboardEvent>;
    keypress: FormInputEvent<KeyboardEvent>;
    keyup: FormInputEvent<KeyboardEvent>;
    mouseover: FormInputEvent<MouseEvent>;
    mouseenter: FormInputEvent<MouseEvent>;
    mouseleave: FormInputEvent<MouseEvent>;
    paste: FormInputEvent<ClipboardEvent>;
    input: FormInputEvent<InputEvent>;
  };
  type $$Props = Attributes & Events & Props;
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
    class="{cn(
      'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      attributes.class,
    )}"
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
    class="{cn(
      'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      attributes.class,
    )}"
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
