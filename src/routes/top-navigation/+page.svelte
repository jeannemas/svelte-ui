<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import { afterNavigate } from '$app/navigation';
  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import * as TopNavigation from '$lib/components/top-navigation/index.js';

  const adapter = zod(
    z
      .object({
        breakpoint: z.enum(TopNavigation.breakpoints).default(TopNavigation.defaultBreakpoint),
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

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
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
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <TopNavigation.Root {...$superFormData} bind:open="{open}">
        <TopNavigation.Section>
          <TopNavigation.Button>Button</TopNavigation.Button>

          <TopNavigation.Link href="https://www.example.com/">Link</TopNavigation.Link>
        </TopNavigation.Section>
      </TopNavigation.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
