<script context="module" lang="ts">
  import { Field, type FieldProps, type FieldSlotProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes of the field.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the field.
   */
  export type Props<T extends Record<string, unknown>, U extends FormPath<T>> = Omit<
    FieldProps<T, U>,
    'form'
  > & {
    superForm: FieldProps<T, U>['form'];
  };
  /**
   * The slots of the field.
   */
  export type Slots<T extends Record<string, unknown>, U extends FormPath<T>> = {
    default: Slot<
      Omit<FieldSlotProps<T, U>, 'value'> & {
        value: unknown;
      }
    >;
  };

  /**
   * The styles of the field.
   */
  export const styles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="T extends Record<string, unknown>, U extends FormPath<T>" lang="ts">
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

<Field form="{superForm}" name="{name}" let:constraints let:errors let:tainted let:value>
  <div
    {...attributes}
    class="{styles({
      class: attributes.class,
    })}"
  >
    <slot constraints="{constraints ?? {}}" errors="{errors}" tainted="{tainted}" value="{value}" />
  </div>
</Field>
