<script context="module" lang="ts">
  import { toast } from 'svelte-sonner';
  import { superForm as createSuperForm, defaults, superForm } from 'sveltekit-superforms';
  import { zod, zodClient } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Sonner from '$lib/components/sonner/index.js';
  import * as Switch from '$lib/components/switch/index.js';
  import Textarea from '$lib/components/textarea/index.js';
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

  const adapter = zod(
    z.object({
      bio: z.string().optional(),
    }),
  );
  const demoSuperForm = createSuperForm(defaults(adapter), {
    onUpdated: ({ form }) => {
      if (form.valid) {
        toast.info(`You submitted ${JSON.stringify(form.data, null, 2)}`);
      } else {
        toast.error('Please fix the errors in the form.');
      }
    },
    SPA: true,
    validators: adapter,
  });
  const { form: demoSuperFormData } = demoSuperForm;
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="disabled" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Disabled</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disabled}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.disabled.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="placeholder" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Placeholder</Form.Label>

        <Textarea {...attrs} {...constraints} bind:value="{$props.placeholder}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.placeholder.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="readonly" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Readonly</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.readonly}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.readonly.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Form.Root class="flex flex-col gap-y-2" debug superForm="{demoSuperForm}">
      <Form.Field name="bio" superForm="{demoSuperForm}" let:constraints>
        <Form.Control let:attrs>
          <Form.Label>Bio</Form.Label>

          <Textarea {...attrs} {...constraints} {...$props} bind:value="{$demoSuperFormData.bio}" />
        </Form.Control>

        <Form.Description>
          You can <code>@mention</code> other users and organizations.
        </Form.Description>

        <Form.FieldErrors />
      </Form.Field>

      <Button.Root class="w-full" type="submit">Submit</Button.Root>
    </Form.Root>

    <Sonner closeButton duration="{10_000}" position="bottom-right" />
  </svelte:fragment>
</ComponentDemoLayout>
