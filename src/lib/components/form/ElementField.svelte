<script context="module" lang="ts">
  import { ElementField, type ElementFieldProps, type ElementFieldSlotProps } from 'formsnap';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import type { FormPathLeaves } from 'sveltekit-superforms';

  import { cn } from '$lib/utils/cn.js';

  export type Attributes = SvelteHTMLElements['div'];
  export type Events = Record<never, never>;
  export type Props<T extends Record<string, unknown>, U extends FormPathLeaves<T>> = Omit<
    ElementFieldProps<T, U>,
    'form'
  > & {
    superForm: ElementFieldProps<T, U>['form'];
  };
  export type Slots<
    T extends Record<string, unknown>,
    U extends FormPathLeaves<T>,
  > = /* ComponentSlots<ElementField<T, U>> */ {
    default: Omit<ElementFieldSlotProps<T, U>, 'value'> & {
      value: unknown; // Should be `PrimitiveFromIndex<T, U>`, not `T[U]`
    };
  };
</script>

<script generics="T extends Record<string, unknown>, U extends FormPathLeaves<T>" lang="ts">
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

<ElementField form="{superForm}" name="{name}" let:constraints let:errors let:tainted let:value>
  <div {...attributes} class="{cn('space-y-2', attributes.class)}">
    <slot constraints="{constraints ?? {}}" errors="{errors}" tainted="{tainted}" value="{value}" />
  </div>
</ElementField>
