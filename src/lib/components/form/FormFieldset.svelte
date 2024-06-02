<script context="module" lang="ts">
  import { Fieldset } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { AnyObject, ComponentInfo } from '$lib/utils/types.js';

  type Primitive<TObject extends AnyObject, TPath extends FormPath<TObject>> = ComponentInfo<
    Fieldset<TObject, TPath>
  >;

  /**
   * The attributes of the fieldset.
   */
  export type Attributes = Omit<SvelteHTMLElements['fieldset'], 'form'>;
  /**
   * The props of the fieldset.
   */
  export type Props<TObject extends AnyObject, TPath extends FormPath<TObject>> = Omit<
    Primitive<TObject, TPath>['props'],
    keyof Attributes
  > & {
    name: TPath;
  };
  /**
   * The slots of the fieldset.
   */
  export type Slots<TObject extends AnyObject, TPath extends FormPath<TObject>> = Primitive<
    TObject,
    TPath
  >['slots'];

  /**
   * The styles of the fieldset.
   */
  export const fieldsetStyles = tv({
    base: ['space-y-2'],
  });
</script>

<script generics="TObject extends AnyObject, TPath extends FormPath<TObject>" lang="ts">
  type $$Events = Primitive<TObject, TPath>['events'];
  type $$Props = Attributes & TypedProps;
  type $$Slots = Slots<TObject, TPath>;
  type TypedProps = Props<TObject, TPath>;

  export let asChild: TypedProps['asChild'] = undefined;
  export let el: TypedProps['el'] = undefined;
  export let form: TypedProps['form'];
  export let name: TypedProps['name'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Fieldset
  {...attributes}
  asChild="{asChild}"
  class="{fieldsetStyles({
    class: attributes.class,
  })}"
  el="{el}"
  form="{form}"
  name="{name}"
  let:constraints
  let:errors
  let:fieldsetAttrs
  let:tainted
  let:value
>
  <slot
    constraints="{constraints ?? {}}"
    errors="{errors}"
    fieldsetAttrs="{{
      ...fieldsetAttrs,
      // 'data-fs-error': errors.length > 0 ? '' : undefined,
    }}"
    tainted="{tainted}"
    value="{value}"
  />
</Fieldset>
