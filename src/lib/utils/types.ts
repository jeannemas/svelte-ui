import '@melt-ui/svelte'; // We need to manually import MeltUI to prevent package resolution issues.
import type { SvelteComponent } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';

export type { ComponentEvents, ComponentProps } from 'svelte';

/**
 * Represents any object.
 */
export type AnyObject = ObjectOf<unknown>;
/**
 * Represents a builder object.
 */
export type BuilderObject = AnyObject;
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
 * A transition function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Transition = (node: Element, params?: any) => TransitionConfig;
/**
 * The configuration to pass to a transition function.
 */
export type TransitionParams<T extends Transition> = Parameters<T>[1];
/**
 * The transition props.
 */
export type TransitionProps<
  TTransition extends Transition = Transition,
  TTransitionIn extends Transition = Transition,
  TTransitionOut extends Transition = Transition,
> = {
  /**
   * A transition function to use during both the in and out transitions.
   */
  transition?: TTransition;
  /**
   * The configuration to pass to the `transition` function.
   */
  transitionConfig?: TransitionParams<NoInfer<TTransition>>;
  /**
   * A transition function to use during the in transition.
   *
   * If provided, this will override the `transition` function.
   */
  inTransition?: TTransitionIn;
  /**
   * The configuration to pass to the `inTransition` function.
   */
  inTransitionConfig?: TransitionParams<NoInfer<TTransitionIn>>;
  /**
   * A transition function to use during the out transition.
   *
   * If provided, this will override the `transition` function.
   */
  outTransition?: TTransitionOut;
  /**
   * The configuration to pass to the `outTransition` function.
   */
  outTransitionConfig?: TransitionParams<NoInfer<TTransitionOut>>;
};

/**
 * The client-side validation constraints.
 *
 * From SuperForms.
 * @see https://superforms.rocks/concepts/client-validation
 */
export type ValidationConstraints = {
  max?: number | string; // number if number validator, ISO date string if date validator
  maxlength?: number; // string with a maximum length
  min?: number | string; // number if number validator, ISO date string if date validator
  minlength?: number; // string with a minimum length
  pattern?: string; // The *first* string validator with a RegExp pattern
  required?: true; // true if not nullable, nullish or optional
  step?: number | 'any'; // number with a step validator
};
