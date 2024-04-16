import type { SvelteComponent } from 'svelte';
import type { Action } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';

export type ComponentSlots<TComponent extends SvelteComponent> =
  TComponent extends SvelteComponent<Record<never, never>, Record<never, never>, infer TSlots>
    ? PatchSlotsWithBuilderAction<TSlots>
    : never;
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
type PatchSlotsWithBuilderAction<TSlots extends Record<string, Record<string, unknown>>> = {
  [TSlotName in keyof TSlots]: TSlots[TSlotName] extends { builder: infer TBuilder }
    ? Expand<Omit<TSlots[TSlotName], 'builder'>> & {
        builder: TBuilder extends { action: Action }
          ? Expand<Omit<TBuilder, 'action'>> & {
              action: Action;
            }
          : TBuilder;
      }
    : TSlots[TSlotName];
};
