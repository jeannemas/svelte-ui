The action for the alert dialog.

Must be used within an `AlertDialog.Content` component.

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

<!-- @include(./example.md) -->
