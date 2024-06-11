The content of the alert dialog.

Must be used within an `AlertDialog.Portal` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

- `pointerdown`
- `pointermove`
- `pointerup`
- `touchcancel`
- `touchend`
- `touchmove`
- `touchstart`

### Props

- `asChild` - Whether to delegate rendering the element to your own custom element.
- `el` - Bind to the underlying DOM element of the component.
- `inTransition` - A transition function to use during the in transition. If provided, this will override the `transition` function.
- `inTransitionConfig` - The configuration to pass to the `inTransition` function.
- `outTransition` - A transition function to use during the out transition. If provided, this will override the `transition` function.
- `outTransitionConfig` - The configuration to pass to the `outTransition` function.
- `transition` - A transition function to use during both the in and out transitions.
- `transitionConfig` - TThe configuration to pass to the `transition` function.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
