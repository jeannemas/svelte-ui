<script context="module" lang="ts">
  import { ElementField, type ElementFieldProps, type ElementFieldSlotProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPathLeaves } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the element field.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the element field.
   */
  export type Props<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = Omit<
    ElementFieldProps<T, U>,
    'form'
  > & {
    superForm: ElementFieldProps<T, U>['form'];
  };
  /**
   * The slots of the element field.
   */
  export type Slots<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = {
    default: Slot<
      Omit<ElementFieldSlotProps<T, U>, 'value'> & {
        value: unknown; // Should be `PrimitiveFromIndex<T, U>`, not `T[U]`
      }
    >;
  };

  /**
   * The styles of the element field.
   */
  export const styles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>" lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<T, U>;
  type TypedProps = Props<T, U>;

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
