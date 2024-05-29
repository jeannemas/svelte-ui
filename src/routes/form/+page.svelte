<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Switch from '$lib/components/switch/index.js';
</script>

<script lang="ts">
  const adapter1 = zod(
    z.object({
      debug: z.boolean().default(false).optional(),
    }),
  );
  const adapter2 = zod(
    z.object({
      username: z.string().min(2).max(50),
    }),
  );
  const superForm1 = createSuperForm(defaults(adapter1), {
    SPA: true,
    validators: adapter1,
  });
  const { form: superFormData1 } = superForm1;
  const superForm2 = createSuperForm(defaults(adapter2), {
    SPA: true,
    validators: adapter2,
  });
  const { form: superFormData2 } = superForm2;
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{superForm1}">
        <Form.Field name="debug" superForm="{superForm1}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Debug</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData1.debug}" />
          </Form.Control>

          <Form.Description>
            Whether to display the form state in a debug panel underneath the form.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root {...$superFormData1} superForm="{superForm2}">
        <Form.Field name="username" superForm="{superForm2}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Placeholder</Form.Label>

            <Input
              {...attrs}
              {...constraints}
              variant="text"
              bind:value="{$superFormData2.username}"
            />
          </Form.Control>

          <Form.Description>This is your public display name.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
