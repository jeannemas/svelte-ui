import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

type FlyAndScaleParams = {
  duration?: number;
  start?: number;
  x?: number;
  y?: number;
};
type Scale = [min: number, max: number];

const DEFAULT_PARAMS = {
  duration: 200,
  start: 0.95,
  x: 0,
  y: 5,
} as const satisfies FlyAndScaleParams;

/**
 * A transition that flies and scales an element.
 *
 * @param element The element to transition.
 * @param params The parameters for the transition.
 * @returns The transition configuration.
 */
export function flyAndScale(
  element: Element,
  params: FlyAndScaleParams = DEFAULT_PARAMS,
): TransitionConfig {
  const style = getComputedStyle(element);
  const transforms: string[] = [];

  if (style.transform !== 'none') {
    transforms.push(style.transform);
  }

  return {
    easing: cubicOut,
    css(t) {
      const scale = scaleConversion(t, [0, 1], [params.start ?? DEFAULT_PARAMS.start, 1]);
      const xPx = scaleConversion(t, [0, 1], [params.x ?? DEFAULT_PARAMS.x, 0]);
      const yPx = scaleConversion(t, [0, 1], [params.y ?? DEFAULT_PARAMS.y, 0]);

      return styleToString({
        transform: transforms
          .concat(`translate3d(${xPx}px, ${yPx}px, 0)`, `scale(${scale})`)
          .join(' '),
        opacity: t,
      });
    },
    delay: 0,
    duration: params.duration || DEFAULT_PARAMS.duration,
  };
}

/**
 * Convert a value from one scale to another.
 *
 * @param value The value to convert.
 * @param fromScale The scale to convert from.
 * @param toScale The scale to convert to.
 * @returns The converted value.
 */
function scaleConversion(value: number, fromScale: Scale, toScale: Scale) {
  const [fromMin, fromMax] = fromScale;
  const [toMin, toMax] = toScale;

  return ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
}
/**
 * Convert a style object to a string.
 *
 * @param style The style object to convert.
 * @returns The style string.
 */
function styleToString(style: Record<string, number | string | undefined>) {
  const parts: string[] = [];

  for (const key in style) {
    if (style[key] == undefined) {
      continue;
    }

    parts.push(`${key}: ${style[key]};`);
  }

  return parts.join(' ');
}
