<script context="module" lang="ts">
  import { toast } from 'svelte-sonner';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Sonner from '$lib/components/sonner/index.js';
  import Switch from '$lib/components/switch/index.js';
  import Textarea from '$lib/components/textarea/index.js';

  const textareaAdapter = zod(
    z
      .object({
        disabled: z.boolean().default(false),
        placeholder: z.string().default('Tell us a little bit about yourself'),
        readonly: z.boolean().default(false),
      })
      .partial(),
  );
  const demoAdapter = zod(
    z.object({
      bio: z.string(),
    }),
  );
</script>

<script lang="ts">
  const textareaSuperForm = createSuperForm(defaults(textareaAdapter), {
    SPA: true,
    validators: textareaAdapter,
  });
  const demoSuperForm = createSuperForm(defaults(demoAdapter), {
    onUpdated: ({ form }) => {
      if (form.valid) {
        toast.info(`You submitted ${JSON.stringify(form.data, null, 2)}`);
      } else {
        toast.error('Please fix the errors in the form.');
      }
    },
    SPA: true,
    validators: demoAdapter,
  });
  const { form: textareaSuperFormData } = textareaSuperForm;
  const { form: demoSuperFormData } = demoSuperForm;
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{textareaSuperForm}">
        <Form.Field name="disabled" superForm="{textareaSuperForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Disabled</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$textareaSuperFormData.disabled}" />
          </Form.Control>

          <Form.Description>Whether the textarea is disabled.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="placeholder" superForm="{textareaSuperForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Placeholder</Form.Label>

            <Textarea
              {...attrs}
              {...constraints}
              bind:value="{$textareaSuperFormData.placeholder}"
            />
          </Form.Control>

          <Form.Description>The textarea placeholder.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="readonly" superForm="{textareaSuperForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Readonly</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$textareaSuperFormData.readonly}" />
          </Form.Control>

          <Form.Description>Whether the textarea is read-only.</Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root class="flex flex-col gap-y-2" debug superForm="{demoSuperForm}">
        <Form.Field name="bio" superForm="{demoSuperForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Bio</Form.Label>

            <Textarea
              {...attrs}
              {...constraints}
              {...$textareaSuperFormData}
              bind:value="{$demoSuperFormData.bio}"
            />
          </Form.Control>

          <Form.Description>
            You can <code>@mention</code> other users and organizations.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Button class="w-full" type="submit">Submit</Button>
      </Form.Root>

      <Sonner closeButton duration="{10_000}" position="bottom-right" />
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
