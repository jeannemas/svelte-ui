<script context="module" lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  type Primitive = ComponentInfo<AlertDialogPrimitive.Root>;

  /**
   * The attributes of the root.
   */
  export type Attributes = EmptyObject;
  /**
   * The breakpoint of the root.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof rootStyles>['breakpoint']>;
  /**
   * The props of the root.
   */
  export type Props = Primitive['props'] & {
    /**
     * The breakpoint of the alert dialog.
     *
     * @default 'sm'
     */
    breakpoint?: Breakpoint;
    /**
     * The variant of the alert dialog.
     *
     * @default 'default'
     */
    variant?: Variant;
  };
  /**
   * The slots of the root.
   */
  export type Slots = Primitive['slots'];
  /**
   * The variant of the root.
   */
  export type Variant = NonNullable<VariantProps<typeof rootStyles>['variant']>;

  /**
   * The styles of the root.
   */
  export const rootStyles = tv({
    base: [''],
    defaultVariants: {
      breakpoint: 'sm',
      variant: 'default',
    },
    variants: {
      breakpoint: {
        sm: [''],
        md: [''],
        lg: [''],
      },
      variant: {
        default: [''],
        destructive: [''],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = rootStyles.defaultVariants.breakpoint;
  export let closeFocus: Props['closeFocus'] = undefined;
  export let closeOnEscape: Props['closeOnEscape'] = undefined;
  export let closeOnOutsideClick: Props['closeOnOutsideClick'] = undefined;
  export let onOpenChange: Props['onOpenChange'] = undefined;
  export let onOutsideClick: Props['onOutsideClick'] = undefined;
  export let open: Props['open'] = undefined;
  export let openFocus: Props['openFocus'] = undefined;
  export let portal: Props['portal'] = undefined;
  export let preventScroll: Props['preventScroll'] = undefined;
  export let variant: Props['variant'] = rootStyles.defaultVariants.variant;

  // $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($rootCtx) => ({
    ...$rootCtx,
    breakpoint,
    variant,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!--
@component

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

### Components hierarchy

```html
<AlertDialog.Root>
  <AlertDialog.Trigger>
    ...
  </AlertDialog.Trigger>

  <AlertDialog.Portal>
    <AlertDialog.Overlay />

    <AlertDialog.Content>
      <AlertDialog.Title>
        ...
      </AlertDialog.Title>

      <AlertDialog.Description>
        ...
      </AlertDialog.Description>

      ...

      <AlertDialog.Cancel>
        ...
      </AlertDialog.Cancel>

      <AlertDialog.Action>
        ...
      </AlertDialog.Action>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
```
-->

<AlertDialogPrimitive.Root
  closeFocus="{closeFocus}"
  closeOnEscape="{closeOnEscape}"
  closeOnOutsideClick="{closeOnOutsideClick}"
  onOpenChange="{onOpenChange}"
  onOutsideClick="{onOutsideClick}"
  openFocus="{openFocus}"
  portal="{portal}"
  preventScroll="{preventScroll}"
  bind:open="{open}"
  let:ids
>
  <slot ids="{ids}" />
</AlertDialogPrimitive.Root>
