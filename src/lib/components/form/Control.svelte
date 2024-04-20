<script context="module" lang="ts">
  import { Control, type ControlProps } from 'formsnap';

  import type { ComponentSlots } from '$lib/utils/types.js';

  export type Attributes = Record<never, never>;
  export type Events = Record<never, never>;
  export type Props = ControlProps;
  export type Slots = ComponentSlots<Control>;
</script>

<script lang="ts">
  type $$Events = Record<never, never>;
  type $$Props = Attributes & Events & Props;
  type $$Slots = Slots;

  export let id: Props['id'] = undefined;

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Control id="{id}" let:attrs>
  <slot attrs="{attrs}" />
</Control>
