The input of the combobox component.

Must be used within a `Combobox.Root` component.

### Attributes

Accepts the attributes of an `input` element.

### Events

- `click`
- `keydown`
- `input`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.
- `value` - The value of the input.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
