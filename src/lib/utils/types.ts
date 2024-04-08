import type { TransitionConfig } from 'svelte/transition';

export type Transition = (node: Element, params?: unknown) => TransitionConfig;
export type TransitionParams<T extends Transition> = Parameters<T>[1];
