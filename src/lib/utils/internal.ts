import type { AnyObject } from './types.js';

/**
 * Casts the given value to any type.
 *
 * Internal function, do not use.
 *
 * @param value The value to cast.
 * @returns The value casted to any type.
 *
 * @private
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function castAsAny(value: unknown): any {
  return value;
}

/**
 * Omits the given keys from the object.
 * This is the functionnal equivalent of Typescript's `Omit` utility type.
 *
 * @param object The object to omit the keys from.
 * @param keys The keys to omit.
 * @returns The object without the given keys.
 *
 * @private
 */
export function omit<TObject extends AnyObject, TKeys extends (keyof TObject)[]>(
  object: TObject,
  keys: TKeys,
): Omit<TObject, TKeys[number]> {
  const result = {
    ...object,
  };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}
