import type { Writable } from 'svelte/store';

import { Context } from '$lib/utils/context.js';

import type {
  CellProps,
  GridBodyProps,
  GridHeadProps,
  GridProps,
  GridRowProps,
  HeaderProps,
  MonthsProps,
  RootProps,
} from './index.js';

export const cellContext = new Context<Writable<Pick<CellProps, never>>>();
export const gridBodyContext = new Context<Writable<Pick<GridBodyProps, never>>>();
export const gridHeadContext = new Context<Writable<Pick<GridHeadProps, never>>>();
export const gridContext = new Context<Writable<Pick<GridProps, never>>>();
export const gridRowContext = new Context<Writable<Pick<GridRowProps, never>>>();
export const headerContext = new Context<Writable<Pick<HeaderProps, never>>>();
export const monthsContext = new Context<Writable<Pick<MonthsProps, never>>>();
export const rootContext = new Context<Writable<Pick<RootProps, 'breakpoint'>>>();
