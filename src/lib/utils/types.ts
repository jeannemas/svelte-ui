import type { SvelteComponent } from 'svelte';
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';

export type ComponentSlots<TComponent extends SvelteComponent, TApplyPatch extends boolean = true> =
  TComponent extends SvelteComponent<Record<never, never>, Record<never, never>, infer TSlots>
    ? true extends TApplyPatch
      ? PatchSlotsWithBuilder<TSlots>
      : TSlots
    : never;
export type ElementEvent<TElement extends HTMLElement, TEvent extends Event> = TEvent & {
  currentTarget: EventTarget & TElement;
};
export type Transition = (node: Element, params?: unknown) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1];

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
