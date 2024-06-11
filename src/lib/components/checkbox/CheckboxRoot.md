The root of the checkbox component.

### Attributes

Accepts the attributes of a `button` element.

### Events

- `click`
- `keydown`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `checked` - The state of the checkbox. You can bind this to a boolean value to programmatically control the checked state.
- `disabled` - Whether the checkbox is disabled.
- `el` - Bind to the underlying DOM element of the component.
- `name` - The name of the checkbox.
- `onCheckedChange` - A callback function that is called when the checked state changes.
- `required` - Whether the checkbox is required.
- `value` - The value of the checkbox.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
