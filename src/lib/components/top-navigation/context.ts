import { getContext, hasContext, setContext } from 'svelte';

import type { Breakpoint } from './index.js';

const KEY = Symbol('top-navigation');

export type TopNavigationContext = {
  breakpoint?: Breakpoint;
};

export function getTopNavigationContext() {
  return getContext<TopNavigationContext>(KEY);
}

export function hasTopNavigationContext() {
  return hasContext(KEY);
}

export function setTopNavigationContext(context: TopNavigationContext) {
  return setContext<TopNavigationContext>(KEY, context);
}
