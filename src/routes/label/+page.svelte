<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Checkbox from '$lib/components/checkbox/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Label from '$lib/components/label/index.js';
</script>

<script lang="ts">
  const adapter = zod(z.object({}));
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
      <Form.Root superForm="{superForm}"></Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <div class="flex flex-row items-center gap-x-2">
        <Checkbox.Root id="terms" />

        <Label {...$superFormData} for="terms">Accept terms and conditions</Label>
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
