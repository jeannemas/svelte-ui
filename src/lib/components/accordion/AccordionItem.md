An item of the accordion component.

Must be used within an `Accordion.Root` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - When `true`, prevents the user from interacting with the item. Overrides the `disabled` prop of the root component.
- `el` - Bind to the underlying DOM element of the component.
- `value` - The value of the item. You can bind this to a value to programmatically control the open state.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
