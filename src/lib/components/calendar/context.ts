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

type CellContext = Pick<CellProps, never> & {
  gridRowContext: GridRowContext;
};
type GridBodyContext = Pick<GridBodyProps, never> & {
  gridContext: GridContext;
};
type GridHeadContext = Pick<GridHeadProps, never> & {
  gridContext: GridContext;
};
type GridContext = Pick<GridProps, never> & {
  monthsContext: MonthsContext;
};
type GridRowContext = Pick<GridRowProps, never> &
  (
    | {
        gridHeadContext: GridHeadContext;
      }
    | {
        gridBodyContext: GridBodyContext;
      }
  );
type HeaderContext = Pick<HeaderProps, never> & {
  rootContext: RootContext;
};
type MonthsContext = Pick<MonthsProps, never> & {
  rootContext: RootContext;
};
type RootContext = Pick<RootProps, 'breakpoint'>;

export const cellContext = new Context<CellContext>();
export const gridBodyContext = new Context<GridBodyContext>();
export const gridHeadContext = new Context<GridHeadContext>();
export const gridContext = new Context<GridContext>();
export const gridRowContext = new Context<GridRowContext>();
export const headerContext = new Context<HeaderContext>();
export const monthsContext = new Context<MonthsContext>();
export const rootContext = new Context<RootContext>();
