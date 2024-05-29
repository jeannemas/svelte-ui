<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Card from '$lib/components/card/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Switch from '$lib/components/switch/index.js';
  import * as Tabs from '$lib/components/tabs/index.js';

  const adapter = zod(
    z
      .object({
        activateOnFocus: z.boolean().default(true),
        loop: z.boolean().default(false),
        orientation: z.enum(Tabs.rootOrientations).default(Tabs.rootDefaultOrientation),
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
        <Form.Field name="activateOnFocus" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Activate on focus</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.activateOnFocus}" />
          </Form.Control>

          <Form.Description>
            Whether or not the tabs should activate when the trigger is focused.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="loop" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Loop</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.loop}" />
          </Form.Control>

          <Form.Description>
            Whether or not the tabs should loop around when the end is reached.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="orientation" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Orientation</Form.Label>

            <Select.Root
              items="{Tabs.rootOrientations.map((orientation) => ({
                label: orientation,
                value: orientation,
              }))}"
              onSelectedChange="{(selected) => {
                $superFormData.orientation = selected?.value;
              }}"
              portal="{null}"
              selected="{$superFormData.orientation !== undefined
                ? {
                    label: $superFormData.orientation,
                    value: $superFormData.orientation,
                  }
                : undefined}"
            >
              <Select.HiddenInput {...attrs} {...constraints} />

              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>

              <Select.Content>
                {#each Tabs.rootOrientations as orientation, index (index)}
                  <Select.Item value="{orientation}">
                    {orientation}
                  </Select.Item>
                {/each}
              </Select.Content>
            </Select.Root>
          </Form.Control>

          <Form.Description>
            The orientation of the tabs, which determines how keyboard navigation works.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Tabs.Root {...$superFormData} value="account">
        <Tabs.List
          class="
            grid
            {$superFormData.orientation === 'horizontal' ? 'grid-cols-2' : ''}
            {$superFormData.orientation === 'vertical' ? 'h-auto grid-cols-1' : ''}
          "
        >
          <Tabs.Trigger value="account">Account</Tabs.Trigger>

          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="account">
          <Card.Root>
            <Card.Header>
              <Card.Title>Account</Card.Title>

              <Card.Description>
                Make changes to your account here. Click save when you're done.
              </Card.Description>
            </Card.Header>

            <Card.Content class="space-y-2">
              <div class="space-y-1">
                <Label for="name">Name</Label>

                <Input id="name" value="Pedro Duarte" variant="text" />
              </div>

              <div class="space-y-1">
                <Label for="username">Username</Label>

                <Input id="username" value="@peduarte" variant="text" />
              </div>
            </Card.Content>

            <Card.Footer>
              <Button>Save changes</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>

        <Tabs.Content value="password">
          <Card.Root>
            <Card.Header>
              <Card.Title>Password</Card.Title>

              <Card.Description>
                Change your password here. After saving, you'll be logged out.
              </Card.Description>
            </Card.Header>

            <Card.Content class="space-y-2">
              <div class="space-y-1">
                <Label for="current">Current password</Label>

                <Input id="current" type="password" variant="text" />
              </div>

              <div class="space-y-1">
                <Label for="new">New password</Label>

                <Input id="new" type="password" variant="text" />
              </div>
            </Card.Content>

            <Card.Footer>
              <Button>Save password</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
      </Tabs.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
