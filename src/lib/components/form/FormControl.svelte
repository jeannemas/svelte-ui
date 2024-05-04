<script context="module" lang="ts">
  import { Control, type ControlProps } from 'formsnap';

  import type { ComponentSlots, Events } from '$lib/utils/types.js';

  /**
   * The attributes of the control.
   */
  export type Attributes = Record<never, never>;
  /**
   * The props of the control.
   */
  export type Props = ControlProps;
  /**
   * The slots of the control.
   */
  export type Slots = ComponentSlots<Control>;
</script>

<script lang="ts">
  type $$Events = Events;
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
