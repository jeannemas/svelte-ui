import type { SvelteComponent } from 'svelte';
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';

/**
 * Extracts the slots of a component.
 *
 * @param TComponent The component to extract the slots from.
 * @param TApplyPatch Whether to apply the patch to the slots.
 */
export type ComponentSlots<TComponent extends SvelteComponent, TApplyPatch extends boolean = true> =
  TComponent extends SvelteComponent<Record<never, never>, Record<never, never>, infer TSlots>
    ? true extends TApplyPatch
      ? PatchSlotsWithBuilder<TSlots>
      : TSlots
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
 * The heading level.
 */
export type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;
/**
 * A transition function.
 */
export type Transition = (node: Element, params?: unknown) => TransitionConfig;

/**
 * Expands the type of an object.
 */
type Expand<T> = T extends object ? (T extends infer O ? { [K in keyof O]: O[K] } : never) : T;
/**
 * Fix for the following error:
 *
 * > The inferred type of `__propDef` cannot be named without a reference to ...`@melt-ui/svelte/internal/types`.
 * > This is likely not portable.
 * > A type annotation is necessary.
 */
type PatchSlotsWithBuilder<TSlots extends Record<string, Record<string, unknown>>> = {
  [TSlotName in keyof TSlots]: TSlots[TSlotName] extends { builder: infer TBuilder }
    ? Expand<Omit<TSlots[TSlotName], 'builder'>> & {
        builder: {
          [TBuilderKey in keyof TBuilder]: TBuilderKey extends 'action'
            ? Action // Prevents importing `import("@melt-ui/svelte/internal/types").MeltActionReturn`
            : TBuilderKey extends 'data-orientation'
              ? string // Prevents importing `import("@melt-ui/svelte/internal/types").Orientation`
              : TBuilder[TBuilderKey];
        };
      }
    : TSlots[TSlotName];
};
