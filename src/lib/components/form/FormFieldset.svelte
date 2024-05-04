<script context="module" lang="ts">
  import { Fieldset, type FieldsetProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';
  import { tv } from 'tailwind-variants';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the fieldset.
   */
  export type Attributes = Omit<SvelteHTMLElements['fieldset'], 'form'>;
  /**
   * The props of the fieldset.
   */
  export type Props<T extends Record<string, unknown>, U extends FormPath<T>> = Omit<
    FieldsetProps<T, U>,
    keyof Attributes
  > & {
    name: U;
  };
  /**
   * The slots of the fieldset.
   */
  export type Slots<T extends Record<string, unknown>, U extends FormPath<T>> = ComponentSlots<
    Fieldset<T, U>
  >;

  /**
   * The styles of the fieldset.
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
  class="{styles({
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
