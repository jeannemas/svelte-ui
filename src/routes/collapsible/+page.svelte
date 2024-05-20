<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        disabled: z.boolean().default(false),
        open: z.boolean().default(false),
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
        <Form.Field name="disabled" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disabled</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disabled}" />
          </Form.Control>

          <Form.Description>
            Whether the collapsible is disabled which prevents it from being opened.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="open" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Open</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
          </Form.Control>

          <Form.Description>The open state of the collapsible.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Collapsible.Root {...superFormData} bind:open="{$superFormData.open}">
        <Collapsible.Trigger asChild let:builder>
          <Button builders="{[builder]}">
            State: {builder['data-state']}
          </Button>
        </Collapsible.Trigger>

        <Collapsible.Content class="bg-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo velit facilis illum
          placeat numquam consectetur culpa ab laboriosam aliquid! Facere, consequatur ex maiores
          dolorum aut commodi quis nostrum impedit?
        </Collapsible.Content>
      </Collapsible.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
