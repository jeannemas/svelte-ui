import type { SvelteComponent } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';

export type ComponentSlots<TComponent extends SvelteComponent> =
  TComponent extends SvelteComponent<Record<never, never>, Record<never, never>, infer TSlots>
    ? TSlots
    : never;
export type Transition = (node: Element, params?: unknown) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1];
