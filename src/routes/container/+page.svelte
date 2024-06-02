<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Container from '$lib/components/container/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import ComponentDemoLayout from '$routes/ComponentDemoLayout.svelte';

  import type { PageData } from './$types.js';
  import { schema } from './props.schema.js';
</script>

<script lang="ts">
  export let data: PageData;

  const form = superForm(data.form, {
    SPA: true,
    validators: zodClient(schema),
  });
  const { form: props } = form;
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="xAxis" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>X axis</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.xAxis}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.xAxis.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="yAxis" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Y axis</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.yAxis}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.yAxis.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae, cupiditate unde cumque
      facere laboriosam, ipsa quo, veritatis in similique est corrupti quibusdam. Itaque, unde
      laboriosam. Aliquid autem dolorem magni.
    </p>

    <Container {...$props} class="bg-muted transition-all duration-75">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sapiente nisi omnis
      temporibus veritatis nihil eligendi impedit similique quo, neque sequi voluptate, ipsum optio
      odit repellat ipsam quidem delectus libero.
    </Container>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempora pariatur numquam
      quae enim cum aliquam rerum accusamus necessitatibus culpa, cupiditate, minima modi doloribus!
      Iure aperiam libero veniam aspernatur distinctio?
    </p>
  </svelte:fragment>
</ComponentDemoLayout>
