import '@melt-ui/svelte';
import type { SvelteComponent } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';

/**
 * Extracts the slots of a component.
 *
 * @param TComponent The component to extract the slots from.
 */
export type ComponentSlots<TComponent extends SvelteComponent> =
  TComponent extends SvelteComponent<Record<never, never>, Record<never, never>, infer TSlots>
    ? TSlots
    : never;
/**
 * Represents an event of an element.
 *
 * @param TElement The type of the element.
 * @param TEvent The type of the event.
 */
export type ElementEvent<TElement extends HTMLElement, TEvent extends Event> = TEvent & {
  currentTarget: EventTarget & TElement;
};
/**
 * Represents an empty slot.
 */
export type EmptySlot = Record<never, never>;
/**
 * The heading level.
 */
export type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;
/**
 * Represents a slot.
 *
 * @default {EmptySlot}
 */
export type Slot<TSlot extends Record<string, unknown> = EmptySlot> = TSlot;
/**
 * A transition function.
 */
export type Transition = (node: Element, params?: unknown) => TransitionConfig;
