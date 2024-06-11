The root of the calendar component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `breakpoint` - The breakpoint of the months.
- `calendarLabel` - The label of the calendar.
- `disabled` - Whether the calendar is disabled.
- `el` - Bind to the underlying DOM element of the component.
- `fixedWeeks` - Whether to always show 6 weeks.
- `initialFocus` - The initial focus of the calendar.
- `isDateDisabled` - A function to determine if a date is disabled.
- `isDateUnavailable` - A function to determine if a date is unavailable.
- `locale` - The locale of the calendar.
- `maxValue` - The maximum value of the calendar.
- `minValue` - The minimum value of the calendar.
- `multiple` - Whether the calendar allows multiple selections.
- `numberOfMonths` - The number of months to show.
- `onPlaceholderChange` - A callback to handle the placeholder change.
- `onValueChange` - A callback to handle the value change.
- `pagedNavigation` - Whether to use paged navigation.
- `placeholder` - The placeholder of the calendar.
- `preventDeselect` - Whether to prevent deselecting the value.
- `readonly` - Whether the calendar is read-only.
- `weekStartsOn` - The week starts on.
- `weekdayFormat` - The format of the weekdays.
- `value` - The value of the calendar.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
  - `months` - The months of the calendar.
  - `weekdays` - The weekdays of the calendar.

<!-- @include(./example.md) -->
