<script context="module" lang="ts">
  import { Control } from 'formsnap';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<Control>;

  /**
   * The attributes of the control.
   */
  export type Attributes = EmptyObject;
  /**
   * The props of the control.
   */
  export type Props = Primitive['props'];
  /**
   * The slots of the control.
   */
  export type Slots = Primitive['slots'];
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let id: Props['id'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Control id="{id}" let:attrs>
  <slot attrs="{attrs}" />
</Control>
