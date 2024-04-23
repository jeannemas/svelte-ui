<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import { afterNavigate } from '$app/navigation';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';
  import * as TopNavigation from '$lib/components/top-navigation/index.js';

  const adapter = zod(
    z.object({
      breakpoint: z
        .enum(TopNavigation.breakpoints)
        .default(TopNavigation.defaultBreakpoint)
        .optional(),
    }),
  );
</script>

<script lang="ts">
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;

  let open = false;

  afterNavigate((params) => {
    if (params.from?.url.pathname === params.to?.url.pathname || params.type === 'enter') {
      return;
    }

    // Close the mobile navbar when the page changes.
    open = false;
  });
</script>

<!-- <style lang="postcss">
</style> -->

<Form.Root superForm="{superForm}">
  <Form.Field name="breakpoint" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Breakpoint</Form.Label>

      <Select.Root
        items="{TopNavigation.breakpoints.map((breakpoint) => ({
          label: breakpoint,
          value: breakpoint,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.breakpoint = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.breakpoint !== undefined
          ? {
              label: $superFormData.breakpoint,
              value: $superFormData.breakpoint,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each TopNavigation.breakpoints as breakpoint, index (index)}
            <Select.Item value="{breakpoint}">
              {breakpoint}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The breakpoint of the navigation.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<TopNavigation.Root breakpoint="{$superFormData.breakpoint}" bind:open="{open}">
  <TopNavigation.Section breakpoint="{$superFormData.breakpoint}">
    <TopNavigation.Button breakpoint="{$superFormData.breakpoint}">Button</TopNavigation.Button>

    <TopNavigation.Link breakpoint="{$superFormData.breakpoint}" href="https://www.example.com/">
      Link
    </TopNavigation.Link>
  </TopNavigation.Section>
</TopNavigation.Root>
