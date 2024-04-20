<script context="module" lang="ts">
  import { Fieldset, type FieldsetProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';

  import { cn } from '$lib/utils/cn.js';
  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Omit<SvelteHTMLElements['fieldset'], 'form'>;
  export type Events = Record<never, never>;
  export type Props<T extends Record<string, unknown>, U extends FormPath<T>> = Omit<
    FieldsetProps<T, U>,
    keyof Attributes
  > & {
    name: U;
  };
  export type Slots<T extends Record<string, unknown>, U extends FormPath<T>> = ComponentSlots<
    Fieldset<T, U>
  >;
</script>

<script generics="T extends Record<string, unknown>, U extends FormPath<T>" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<T, U>;
  type TypedSlots = Slots<T, U>;

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
  class="{cn('space-y-2', attributes.class)}"
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
