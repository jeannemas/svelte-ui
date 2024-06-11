A day of a month inside a calendar component.

Must be used within a `Calendar.Cell` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

- `click`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `date` - The date value of the cell.
- `el` - Bind to the underlying DOM element of the component.
- `month` - The month value that the cell belongs to.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
  - `disabled` - Whether the day is disabled.
  - `selected` - Whether the day is selected.
  - `unavailable` - Whether the day is unavailable.

<!-- @include(./example.md) -->
