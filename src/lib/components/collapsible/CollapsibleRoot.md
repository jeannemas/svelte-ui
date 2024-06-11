The root of the collapsible component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - Whether the checkbox is disabled.
- `el` - Bind to the underlying DOM element of the component.
- `open` - Whether the collapsible is open.
- `onOpenChange` - Callback when the collapsible is opened or closed.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
