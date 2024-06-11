A link of a breadcrumb item component.

Must be used within a `Breadcrumb.Item` component.

### Attributes

Accepts the attributes of an `a` element.

### Events

None.

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.
- `href` - The URL of the link.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
