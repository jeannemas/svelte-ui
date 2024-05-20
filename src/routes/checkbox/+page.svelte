<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Checkbox from '$lib/components/checkbox/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Label from '$lib/components/label/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        checked: z.boolean().default(false),
        disabled: z.boolean().default(false),
      })
      .partial(),
  );
</script>

<script lang="ts">
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{superForm}">
        <Form.Field name="checked" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Checked</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.checked}" />
          </Form.Control>

          <Form.Description>
            The state of the checkbox. You can bind this to a boolean value to programmatically
            control the checked state.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="disabled" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disabled</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
          </Form.Control>

          <Form.Description>
            <span>When</span>

            <code>true</code>

            <span>, the checkbox will be disabled.</span>
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <div class="flex items-center space-x-2">
        <Checkbox
          {...$superFormData}
          id="terms"
          aria-labelledby="terms-label"
          bind:checked="{$superFormData.checked}"
        />

        <Label for="terms" id="terms-label">Accept terms and conditions</Label>
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
