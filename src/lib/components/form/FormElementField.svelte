<script context="module" lang="ts">
  import { ElementField, type ElementFieldProps, type ElementFieldSlotProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPathLeaves } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  /**
   * The attributes of the element field component.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the element field component.
   */
  export type Props<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = Omit<
    ElementFieldProps<T, U>,
    'form'
  > & {
    superForm: ElementFieldProps<T, U>['form'];
  };
  /**
   * The slots of the element field component.
   */
  export type Slots<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = {
    default: Omit<ElementFieldSlotProps<T, U>, 'value'> & {
      value: unknown; // Should be `PrimitiveFromIndex<T, U>`, not `T[U]`
    };
  };

  /**
   * The styles of the element field.
   */
  export const styles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<T, U>;
  type TypedSlots = Slots<T, U>;

  export let name: TypedProps['name'];
  export let superForm: TypedProps['superForm'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<ElementField form="{superForm}" name="{name}" let:constraints let:errors let:tainted let:value>
  <div
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
  >
    <slot constraints="{constraints ?? {}}" errors="{errors}" tainted="{tainted}" value="{value}" />
  </div>
</ElementField>