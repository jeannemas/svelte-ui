<script context="module" lang="ts">
  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import type { EmptyObject } from '$lib/utils/types.js';

  export type Attributes = EmptyObject;
  export type Props = Pick<Form.RootProps, 'superForm'>;
  export type Slots = {
    config: EmptyObject;
    demo: EmptyObject;
  };
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let superForm: Props['superForm'];

  // $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  {#if $$slots.config}
    <Accordion.Item value="config">
      <Accordion.Header>
        <Accordion.Trigger>Config</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Form.Root superForm="{superForm}">
          <slot name="config" />
        </Form.Root>
      </Accordion.Content>
    </Accordion.Item>
  {/if}

  <Accordion.Item disabled value="demo">
    <Accordion.Header>
      <Accordion.Trigger>Demo</Accordion.Trigger>
    </Accordion.Header>

    <Accordion.Content>
      <slot name="demo" />
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
