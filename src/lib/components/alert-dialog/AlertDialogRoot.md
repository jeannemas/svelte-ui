The root of the alert dialog component.

### Attributes

None.

### Events

None.

### Props

- `breakpoint` - The breakpoint of the alert dialog.
- `closeFocus` - Override the initial focus when the alert dialog is opened.
- `closeOnEscape` - Whether to close the alert dialog when the escape key is pressed.
- `closeOnOutsideClick` - Whether to close the alert dialog when a click occurs outside of it.
- `onOpenChange` - A callback function called when the open state changes.
- `onOutsideClick` - A callback function called when a click occurs outside of the element. If `event.preventDefault()` is called, the default behavior of closing the element will be prevented.
- `open` - Whether or not the alert dialog is open.
- `openFocus` - Override the initial focus when the alert dialog is opened.
- `portal` - Where to render the alert dialog when it is open. Defaults to the body. Can be disabled by passing `null`.
- `preventScroll` - Whether or not to prevent scroll on the body when the alert dialog is open.
- `variant` - The variant of the alert.

### Slots

- `default` - The default slot.
  - `ids` - The ids of the alert dialog elements.

<!-- @include(./example.md) -->
