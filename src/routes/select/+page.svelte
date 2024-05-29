<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';

  import type { PageData } from './$types.js';
</script>

<script lang="ts">
  export let data: PageData;

  const users = data.users.map(({ id, name }) => ({
    label: name,
    value: id.toString(),
  }));

  const adapter = zod(
    z.object({
      closeOnEscape: z.boolean().default(true).optional(),
      closeOnOutsideClick: z.boolean().default(true).optional(),
      disabled: z.boolean().default(false).optional(),
      loop: z.boolean().default(false).optional(),
      preventScroll: z.boolean().default(false).optional(),
    }),
  );
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
            Whether or not to close the listbox menu when the user presses the escape key.
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
            Whether or not to close the listbox menu when the user clicks outside of the listbox.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="disabled" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disabled</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
          </Form.Control>

          <Form.Description>Whether the select is disabled.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="loop" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Loop</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.loop}" />
          </Form.Control>

          <Form.Description>
            Whether or not the listbox should loop through the list when the end or beginning is
            reached.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="preventScroll" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Prevent scroll</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventScroll}" />
          </Form.Control>

          <Form.Description>
            Whether or not to prevent scrolling the page when the listbox menu is open.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Select.Root {...$superFormData} items="{users}" portal="{null}">
        <Select.HiddenInput id="user" name="user" />

        <Select.Trigger>
          <Select.Value placeholder="Select a user" />
        </Select.Trigger>

        <Select.Content>
          {#each users as user (user.value)}
            <Select.Item value="{user.value}">
              {user.label}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
