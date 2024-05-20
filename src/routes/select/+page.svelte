<script context="module" lang="ts">
  import type { Selected } from 'bits-ui';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        closeOnEscape: z.boolean().default(true),
        closeOnOutsideClick: z.boolean().default(true),
        disabled: z.boolean().default(false),
        loop: z.boolean().default(false),
        open: z.boolean().default(false),
        preventScroll: z.boolean().default(false),
      })
      .partial(),
  );
  const fruits = ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'];
</script>

<script lang="ts">
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;

  let selectedFruit: Selected<string> | undefined = undefined;
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

        <Form.Field name="open" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
          </Form.Control>

          <Form.Description>The open state of the select menu.</Form.Description>

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
      <Select.Root
        {...$superFormData}
        items="{fruits.map((fruit) => ({
          label: fruit,
          value: fruit,
        }))}"
        onSelectedChange="{(selected) => {
          selectedFruit = selected;
        }}"
        portal="{null}"
        selected="{selectedFruit}"
        bind:open="{$superFormData.open}"
      >
        <Select.Input id="fruit" name="fruit" />

        <Select.Trigger>
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>

        <Select.Content>
          {#each fruits as fruit, index (index)}
            <Select.Item value="{fruit}">
              {fruit}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
