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

type CellContext = GridRowContext & {
  [K in keyof Pick<CellProps, never> as `cell${Capitalize<K>}`]: CellProps[K];
};
type GridBodyContext = GridContext & {
  [K in keyof Pick<GridBodyProps, never> as `gridBody${Capitalize<K>}`]: GridBodyProps[K];
};
type GridHeadContext = GridContext & {
  [K in keyof Pick<GridHeadProps, never> as `gridHead${Capitalize<K>}`]: GridHeadProps[K];
};
type GridContext = MonthsContext & {
  [K in keyof Pick<GridProps, never> as `grid${Capitalize<K>}`]: GridProps[K];
};
type GridRowContext = (GridHeadContext | GridBodyContext) & {
  [K in keyof Pick<GridRowProps, never> as `gridRow${Capitalize<K>}`]: GridRowProps[K];
};
type HeaderContext = RootContext & {
  [K in keyof Pick<HeaderProps, never> as `header${Capitalize<K>}`]: HeaderProps[K];
};
type MonthsContext = RootContext & {
  [K in keyof Pick<MonthsProps, never> as `months${Capitalize<K>}`]: MonthsProps[K];
};
type RootContext = {
  [K in keyof Pick<RootProps, 'breakpoint'> as `root${Capitalize<K>}`]: RootProps[K];
};

export const cellContext = new Context<Writable<CellContext>>();
export const gridBodyContext = new Context<Writable<GridBodyContext>>();
export const gridHeadContext = new Context<Writable<GridHeadContext>>();
export const gridContext = new Context<Writable<GridContext>>();
export const gridRowContext = new Context<Writable<GridRowContext>>();
export const headerContext = new Context<Writable<HeaderContext>>();
export const monthsContext = new Context<Writable<MonthsContext>>();
export const rootContext = new Context<Writable<RootContext>>();
