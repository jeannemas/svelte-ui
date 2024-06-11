import { getContext, hasContext, setContext } from 'svelte';
import type { Writable } from 'svelte/store';

export class Context<TContext> {
  readonly #key = Symbol();

  /**
   * Returns the context object from the current component hierarchy or `null` if it doesn't exist.
   *
   * @returns The context object or `null` if it doesn't exist.
   */
  get(): Writable<TContext> | null {
    return this.has() ? getContext<Writable<TContext>>(this.#key) : null;
  }

  /**
   * Returns whether the context exists in the current component hierarchy.
   *
   * @returns Whether the context exists in the current component hierarchy.
   */
  has(): boolean {
    return hasContext(this.#key);
  }

  /**
   * Sets the context object in the current component hierarchy.
   *
   * @param newContext The new context object to set.
   * @returns The new context object.
   */
  set(newContext: Writable<TContext>): Writable<TContext> {
    return setContext<Writable<TContext>>(this.#key, newContext);
  }
}
