<script context="module" lang="ts">
  import { ElementField } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPathLeaves } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import { castAsAny } from '$lib/utils/internal.js';
  import type { AnyObject, ComponentInfo, ObjectOf } from '$lib/utils/types.js';

  type Primitive<T extends AnyObject, U extends FormPathLeaves<T>> = ComponentInfo<
    ElementField<T, U>
  >;

  /**
   * The attributes of the element field.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the element field.
   */
  export type Props<T extends AnyObject, U extends FormPathLeaves<T>> = Omit<
    Primitive<T, U>['props'],
    'form'
  > & {
    superForm: Primitive<T, U>['props']['form'];
  };
  /**
   * The slots of the element field.
   */
  export type Slots<T extends AnyObject, U extends FormPathLeaves<T>> = {
    default: Omit<Primitive<T, U>['slots']['default'], 'constraints' | 'value'> & {
      // Manual omissions to prevent infinite loop while compiling the package
      constraints: ObjectOf<unknown>;
      value: unknown;
    };
  };

  /**
   * The styles of the element field.
   */
  export const styles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="T extends AnyObject, U extends FormPathLeaves<T>" lang="ts">
  type $$Events = Primitive<T, U>['events'];
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
    <slot
      constraints="{castAsAny(constraints)}"
      errors="{errors}"
      tainted="{tainted}"
      value="{value}"
    />
  </div>
</ElementField>
