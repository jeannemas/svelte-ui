<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import Button from '$lib/components/button/index.js';
  import * as Drawer from '$lib/components/drawer/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Switch from '$lib/components/switch/index.js';
</script>

<script lang="ts">
  const adapter = zod(
    z.object({
      closeOnEscape: z.boolean().default(true).optional(),
      closeOnOutsideClick: z.boolean().default(true).optional(),
    }),
  );
  const superForm = createSuperForm(defaults(adapter), {
    SPA: true,
    validators: adapter,
  });
  const { form: superFormData } = superForm;

  let goal = 350;

  function handleClick(adjustment: number) {
    goal = Math.max(200, Math.min(400, goal + adjustment));
  }
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <Form.Root superForm="{superForm}">
        <Form.Field name="closeOnEscape" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on escape</Form.Label>

            <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnEscape}" />
          </Form.Control>

          <Form.Description>
            If true, the dialog will close when the user presses the escape key.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>

        <Form.Field name="closeOnOutsideClick" superForm="{superForm}" let:constraints>
          <Form.Control let:attrs>
            <Form.Label>Close on outside click</Form.Label>

            <Switch
              {...attrs}
              {...constraints}
              bind:checked="{$superFormData.closeOnOutsideClick}"
            />
          </Form.Control>

          <Form.Description>
            If true, the dialog will close when the user clicks outside of it.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Drawer.Root {...$superFormData} dismissible shouldScaleBackground>
        <Drawer.Trigger asChild let:builder>
          <Button builders="{[builder]}" variant="outline">Open Drawer</Button>
        </Drawer.Trigger>

        <Drawer.Content>
          <div class="mx-auto w-full max-w-sm">
            <Drawer.Header>
              <Drawer.Title>Move Goal</Drawer.Title>

              <Drawer.Description>Set your daily activity goal.</Drawer.Description>
            </Drawer.Header>

            <div class="p-4 pb-0">
              <div class="flex flex-row items-center justify-center gap-x-2">
                <Button
                  class="size-8 shrink-0 rounded-full"
                  disabled="{goal <= 200}"
                  size="icon"
                  variant="outline"
                  on:click="{() => handleClick(-10)}"
                >
                  -

                  <span class="sr-only">Decrease</span>
                </Button>

                <div class="shrink grow basis-0 text-center">
                  <div class="text-7xl font-bold tracking-tighter">
                    {goal}
                  </div>

                  <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                </div>

                <Button
                  class="size-8 shrink-0 rounded-full"
                  disabled="{goal >= 400}"
                  size="icon"
                  variant="outline"
                  on:click="{() => handleClick(10)}"
                >
                  +

                  <span class="sr-only">Increase</span>
                </Button>
              </div>
            </div>

            <Drawer.Footer>
              <Button>Submit</Button>

              <Drawer.Close asChild let:builder>
                <Button builders="{[builder]}" variant="outline">Cancel</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </div>
        </Drawer.Content>
      </Drawer.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
