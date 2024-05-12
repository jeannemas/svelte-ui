import '@melt-ui/svelte'; // We need to manually import MeltUI to prevent package resolution issues.
import type { SvelteComponent } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';

export type { ComponentEvents, ComponentProps } from 'svelte';

/**
 * Represents any object.
 */
export type AnyObject = ObjectOf<unknown>;
/**
 * Extracts the informations of a component.
 */
export type ComponentInfo<TComponent extends SvelteComponent> =
  TComponent extends SvelteComponent<infer TProps, infer TEvents, infer TSlots>
    ? {
        /**
         * The events of the component.
         */
        events: TEvents;
        /**
         * The props of the component.
         */
        props: TProps;
        /**
         * The slots of the component.
         */
        slots: TSlots;
      }
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
 * Represents an empty object.
 */
export type EmptyObject = Record<never, never>;
/**
 * The heading level.
 */
export type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;
/**
 * Represents an object of values.
 */
export type ObjectOf<TValue, TKey extends string | number | symbol = string> = Record<TKey, TValue>;
/**
 * Represents a slot.
 *
 * @default EmptyObject
 */
export type Slot<TSlot extends AnyObject = EmptyObject> = TSlot;
/**
 * A transition function.
 */
export type Transition = (node: Element, params?: unknown) => TransitionConfig;
