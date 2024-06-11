An item of the combobox component.

Must be used within a `Combobox.Content` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

- `click`
- `focusin`
- `focusout`
- `keydown`
- `pointerleave`
- `pointermove`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `disabled` - Whether the item is disabled.
- `el` - Bind to the underlying DOM element of the component.
- `label` - The label of the item.
- `value` - The value of the item.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.
  - `isSelected` - Whether the item is selected.

<!-- @include(./example.md) -->
