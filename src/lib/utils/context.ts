import { getContext, hasContext, setContext } from 'svelte';

export class Context<TContext> {
  readonly #key = Symbol();

  /**
   * Returns the context object from the current component hierarchy or `null` if it doesn't exist.
   *
   * @returns The context object or `null` if it doesn't exist.
   */
  get(): TContext | null {
    return this.has() ? getContext<TContext>(this.#key) : null;
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
  set(newContext: TContext): TContext {
    return setContext<TContext>(this.#key, newContext);
  }
}
