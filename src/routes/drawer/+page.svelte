<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Drawer from '$lib/components/drawer/index.js';
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

  let goal = 350;

  function handleClick(adjustment: number) {
    goal = Math.max(200, Math.min(400, goal + adjustment));
  }
</script>

<!-- <style lang="postcss">
</style> -->

<ComponentDemoLayout superForm="{form}">
  <svelte:fragment slot="config">
    <Form.Field name="closeOnEscape" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Close on escape</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnEscape}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnEscape.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="closeOnOutsideClick" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Close on outside click</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.closeOnOutsideClick}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.closeOnOutsideClick.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Drawer.Root {...$props} dismissible shouldScaleBackground>
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
  </svelte:fragment>
</ComponentDemoLayout>
