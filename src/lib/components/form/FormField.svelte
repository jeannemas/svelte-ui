<script context="module" lang="ts">
  import { Field } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, ComponentInfo, EmptyObject, ObjectOf } from '$lib/utils/types.js';

  type Primitive<TObject extends AnyObject, TPath extends FormPath<TObject>> = ComponentInfo<
    Field<TObject, TPath>
  >;

  /**
   * The attributes of the field.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The props of the field.
   */
  export type Props<TObject extends AnyObject, TPath extends FormPath<TObject>> = Omit<
    Primitive<TObject, TPath>['props'],
    'form'
  > & {
    superForm: Primitive<TObject, TPath>['props']['form'];
  };
  /**
   * The slots of the field.
   */
  export type Slots<TObject extends AnyObject, TPath extends FormPath<TObject>> = {
    default: Omit<Primitive<TObject, TPath>['slots']['default'], 'constraints' | 'value'> & {
      // Manual omissions to prevent infinite loop while compiling the package
      constraints?: ObjectOf<unknown>;
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

<script generics="TObject extends AnyObject, TPath extends FormPath<TObject>" lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TObject, TPath>;
  type TypedProps = Props<TObject, TPath>;

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
    <slot constraints="{constraints}" errors="{errors}" tainted="{tainted}" value="{value}" />
  </div>
</Field>
