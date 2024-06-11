The root of the accordion component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - When `true`, prevents the user from interacting with the accordion.
- `el` - Bind to the underlying DOM element of the component.
- `multiple` - If `true`, multiple accordion items can be open at the same time.
- `onValueChange` - A callback function called when the value changes.
- `value` - The value of the accordion. You can bind this to a value to programmatically control the open state.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
