The trigger for the item.

Must be used within an `Accordion.Header` component.

### Attributes

Accepts the attributes of a `button` element.

### Events

- `click` - Dispatched when the trigger is clicked.
- `keydown` - Dispatched when a key is pressed down on the trigger.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
- `icon` - The icon slot.
  - `isDisabled` - Whether the trigger is disabled.
  - `isOpen` - Whether the item is open.

<!-- @include(./example.md) -->
