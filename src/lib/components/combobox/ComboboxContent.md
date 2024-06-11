The content of the combobox component.

Must be used within a `Combobox.Root` component.

### Attributes

Accepts the attributes of a `div` element.

### Events

- `keydown`
- `pointerleave`

### Props

- `align` - The preferred alignment of the anchor to render against when open. This may change when collisions occur.
- `alignOffset` - An offset in pixels from the "start" or "end" alignment options.
- `asChild` - Whether to delegate rendering the element to your own custom element.
- `avoidCollisions` - When `true`, overrides the side and align options to prevent collisions with the boundary edges.
- `collisionBoundary` - A boundary element or array of elements to check for collisions against.
- `collisionPadding` - The amount in pixels of virtual padding around the viewport edges to check for overflow which will cause a collision.
- `el` - Bind to the underlying DOM element of the component.
- `fitViewport` - Whether the floating element should be constrained to the viewport.
- `inTransition` - A transition function to use during the in transition. If provided, this will override the `transition` function.
- `inTransitionConfig` - The configuration to pass to the `inTransition` function.
- `outTransition` - A transition function to use during the out transition. If provided, this will override the `transition` function.
- `outTransitionConfig` - The configuration to pass to the `outTransition` function.
- `overlap` - Whether the floating element can overlap the reference element.
- `sameWidth` - Whether the content should be the same width as the trigger.
- `side` - The preferred side of the anchor to render against when open. Will be reversed when collisions occur.
- `sideOffset` - The distance in pixels from the anchor to the floating element.
- `strategy` - The positioning strategy to use for the floating element.
- `transition` - A transition function to use during both the in and out transitions.
- `transitionConfig` - TThe configuration to pass to the `transition` function.

### Slots

- `default` - The default slot.
  - `builder` - The builder object, provided when `asChild=true`.

<!-- @include(./example.md) -->
