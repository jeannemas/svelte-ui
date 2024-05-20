<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as AlertDialog from '$lib/components/alert-dialog/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        closeOnEscape: z.boolean().default(true),
        closeOnOutsideClick: z.boolean().default(false),
        open: z.boolean().default(false),
        preventScroll: z.boolean().default(true),
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
        <Form.Field name="closeOnEscape" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on escape</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnEscape}" />
          </Form.Control>

          <Form.Description>
            Whether or not to close the alert dialog when the escape key is pressed.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="closeOnOutsideClick" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on outside click</Form.Label>

            <Switch
              {...attrs}
              {...constraints}
              bind:checked="{$superFormData.closeOnOutsideClick}"
            />
          </Form.Control>

          <Form.Description>
            Whether or not to close the alert dialog when the escape key is pressed.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="open" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
          </Form.Control>

          <Form.Description>The open state of the alert dialog.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="preventScroll" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Prevent scroll</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventScroll}" />
          </Form.Control>

          <Form.Description>
            Whether or not to prevent scrolling when the alert dialog is open.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <AlertDialog.Root {...$superFormData} bind:open="{$superFormData.open}">
        <AlertDialog.Trigger asChild let:builder>
          <Button builders="{[builder]}" variant="outline">Show Dialog</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>

            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>

          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>

            <AlertDialog.Action>Continue</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
