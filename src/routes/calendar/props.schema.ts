import z from 'zod';

import { rootStyles, type RootBreakpoint } from '$lib/components/calendar/index.js';

const breakpoints = Object.keys(rootStyles.variants.breakpoint) as [
  RootBreakpoint,
  ...RootBreakpoint[],
];

export const schema = z.object({
  breakpoint: z.enum(breakpoints, {
    description: 'The breakpoint of the calendar.',
  }),
  disabled: z.boolean({
    description: `
      Whether the calendar is disabled.
      When \`true\`, the user will not be able to focus or select dates.
    `,
  }),
  fixedWeeks: z.boolean({
    description: `
      Display 6 weeks per month, regardless the month's number of weeks.
      This is useful for displaying a consistent calendar, where the size of the calendar doesn't change month to month.
    `,
  }),
  numberOfMonths: z
    .number({
      description: 'Determines the number of months to display on the calendar simultaneously.',
    })
    .int()
    .min(1),
  pagedNavigation: z.boolean({
    description: `
      Applicable only when numberOfMonths is greater than \`1\`.
      Controls whether to use paged navigation for the next and previous buttons in the date picker.
      With paged navigation set to \`true\`, clicking the next/prev buttons changes all months in view.
      When set to \`false\`, it shifts the view by a single month.
      For example, with pagedNavigation set to \`true\` and 2 months displayed (January and February), clicking the next button changes the view to March and April.
      If pagedNavigation is \`false\`, the view shifts to February and March.
    `,
  }),
  preventDeselect: z.boolean({
    description: `
      Prevent deselecting the selected date(s), which would set the value to \`undefined\`.
      You can use this to ensure a date is always selected in certain situations.
    `,
  }),
  readonly: z.boolean({
    description: `
      Whether the calendar is readonly.
      When \`true\`, the user will be able to focus and navigate the calendar, but will not be able to select dates.
    `,
  }),
});
