import type { Selected } from 'bits-ui';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { sonnerStyles, type Dir, type Position, type Theme } from '$lib/components/sonner/index.js';

import type { PageLoad } from './$types.js';
import { schema } from './props.schema.js';

export const load = (async () => {
  const form = await superValidate(zod(schema), {
    defaults: {
      closeButton: false,
      dir: sonnerStyles.defaultVariants.dir!,
      duration: 4_000,
      expand: false,
      gap: 14,
      invert: false,
      offset: 32,
      position: sonnerStyles.defaultVariants.position!,
      richColors: false,
      theme: sonnerStyles.defaultVariants.theme!,
      visibleToasts: 3,
    },
  });
  const dirs = Object.keys(sonnerStyles.variants.dir).map(
    (dir) =>
      ({
        label: dir,
        value: dir,
      }) as Selected<Dir>,
  );
  const positions = Object.keys(sonnerStyles.variants.position).map(
    (position) =>
      ({
        label: position,
        value: position,
      }) as Selected<Position>,
  );
  const themes = Object.keys(sonnerStyles.variants.theme).map(
    (theme) =>
      ({
        label: theme,
        value: theme,
      }) as Selected<Theme>,
  );

  return {
    form,
    dirs,
    positions,
    themes,
  };
}) satisfies PageLoad;
