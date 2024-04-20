<script context="module" lang="ts">
  import { Field, type FieldProps, type FieldSlotProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPath } from 'sveltekit-superforms';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props<T extends Record<string, unknown>, U extends FormPath<T>> = Omit<
    FieldProps<T, U>,
    'form'
  > & {
    superForm: FieldProps<T, U>['form'];
  };
  export type Slots<
    T extends Record<string, unknown>,
    U extends FormPath<T>,
  > = /* ComponentSlots<Field<T, U>> */ {
    default: Omit<FieldSlotProps<T, U>, 'value'> & {
      value: unknown;
    };
  };
</script>

<script generics="T extends Record<string, unknown>, U extends FormPath<T>" lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & TypedProps;
  type $$Slots = TypedSlots;
  type TypedProps = Props<T, U>;
  type TypedSlots = Slots<T, U>;

  export let name: TypedProps['name'];
  export let superForm: TypedProps['superForm'];

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Field form="{superForm}" name="{name}" let:constraints let:errors let:tainted let:value>
  <div {...attributes} class="{cn('space-y-2', attributes.class)}">
    <slot constraints="{constraints ?? {}}" errors="{errors}" tainted="{tainted}" value="{value}" />
  </div>
</Field>
