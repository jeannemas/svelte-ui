import type { Accordion as AccordionPrimitive } from 'bits-ui';
import type { SvelteHTMLElements } from 'svelte/elements';

import type { BuilderObject, Transition } from '$lib/utils/types.js';

/**
 * The attributes of the content.
 */
export type Attributes = SvelteHTMLElements['div'];
/**
 * The props of the content.
 */
export type Props<
  TContentTransition extends Transition = Transition,
  TContentTransitionIn extends Transition = Transition,
  TContentTransitionOut extends Transition = Transition,
> = Omit<
  AccordionPrimitive.ContentProps<TContentTransition, TContentTransitionIn, TContentTransitionOut>,
  keyof Attributes
>;
/**
 * The slots of the content.
 */
export type Slots = {
  builder: BuilderObject;
};
