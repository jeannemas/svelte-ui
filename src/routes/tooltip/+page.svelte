<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Switch from '$lib/components/switch/index.js';
  import * as Tooltip from '$lib/components/tooltip/index.js';

  const adapter = zod(
    z
      .object({
        closeDelay: z.number().min(0).default(0),
        closeOnEscape: z.boolean().default(false),
        closeOnPointerDown: z.boolean().default(false),
        disableHoverableContent: z.boolean().default(false),
        open: z.boolean().default(false),
        openDelay: z.number().min(0).default(0),
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
        <Form.Field name="closeDelay" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close delay</Form.Label>

            <Input
              {...attrs}
              {...constraints}
              inputmode="decimal"
              step="{0.05}"
              variant="number"
              bind:value="{$superFormData.closeDelay}"
            />
          </Form.Control>

          <Form.Description>The tooltip close delay (in ms).</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="closeOnEscape" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on escape</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnEscape}" />
          </Form.Control>

          <Form.Description>Whether to close the tooltip on escape.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="closeOnPointerDown" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on pointer down</Form.Label>

            <Switch
              {...attrs}
              {...constraints}
              bind:checked="{$superFormData.closeOnPointerDown}"
            />
          </Form.Control>

          <Form.Description>Whether to close the tooltip on pointer down.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="disableHoverableContent" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disable hoverable content</Form.Label>

            <Switch
              {...attrs}
              {...constraints}
              bind:checked="{$superFormData.disableHoverableContent}"
            />
          </Form.Control>

          <Form.Description>Whether to disbale the hoverable content.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="open" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
          </Form.Control>

          <Form.Description>Whether to open the tooltip.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="openDelay" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open delay</Form.Label>

            <Input
              {...attrs}
              {...constraints}
              inputmode="decimal"
              step="{0.05}"
              variant="number"
              bind:value="{$superFormData.openDelay}"
            />
          </Form.Control>

          <Form.Description>The tooltip open delay (in ms).</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Tooltip.Root {...$superFormData} bind:open="{$superFormData.open}">
        <Tooltip.Trigger asChild let:builder>
          <Button builders="{[builder]}" variant="outline">Hover</Button>
        </Tooltip.Trigger>

        <Tooltip.Content>
          <p>Add to library</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
