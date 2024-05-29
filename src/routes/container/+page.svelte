<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Container from '$lib/components/container/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';
</script>

<script lang="ts">
  const adapter = zod(
    z.object({
      xAxis: z.boolean().default(false).optional(),
      yAxis: z.boolean().default(false).optional(),
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
        <Form.Field name="xAxis" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>X axis</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.xAxis}" />
          </Form.Control>

          <Form.Description>Whether to add horizontal padding.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="yAxis" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Y axis</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.yAxis}" />
          </Form.Control>

          <Form.Description>Whether to add vertical padding.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae, cupiditate unde cumque
        facere laboriosam, ipsa quo, veritatis in similique est corrupti quibusdam. Itaque, unde
        laboriosam. Aliquid autem dolorem magni.
      </p>

      <Container {...$superFormData} class="bg-muted transition-all duration-75">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sapiente nisi omnis
        temporibus veritatis nihil eligendi impedit similique quo, neque sequi voluptate, ipsum
        optio odit repellat ipsam quidem delectus libero.
      </Container>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempora pariatur
        numquam quae enim cum aliquam rerum accusamus necessitatibus culpa, cupiditate, minima modi
        doloribus! Iure aperiam libero veniam aspernatur distinctio?
      </p>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
