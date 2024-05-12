<script context="module" lang="ts">
  import { Field } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import { castAsAny } from '$lib/utils/internal.js';
  import type { AnyObject, ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive<T extends AnyObject, U extends FormPath<T>> = ComponentInfo<Field<T, U>>;

  /**
   * The attributes of the field.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the field.
   */
  export type Props<T extends AnyObject, U extends FormPath<T>> = Omit<
    Primitive<T, U>['props'],
    'form'
  > & {
    superForm: Primitive<T, U>['props']['form'];
  };
  /**
   * The slots of the field.
   */
  export type Slots<T extends AnyObject, U extends FormPath<T>> = {
    default: Omit<Primitive<T, U>['slots']['default'], 'value'> & {
      // Manual omission to prevent infinite loop while compiling the package
      value: unknown;
    };
  };

  /**
   * The styles of the field.
   */
  export const styles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="T extends AnyObject, U extends FormPath<T>" lang="ts">
  type $$Events = EmptyObject;
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
    <slot
      constraints="{castAsAny(constraints)}"
      errors="{errors}"
      tainted="{tainted}"
      value="{value}"
    />
  </div>
</Field>
