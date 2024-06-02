<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Popover from '$lib/components/popover/index.js';
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

    <Form.Field name="disableFocusTrap" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Disable focus trap</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.disableFocusTrap}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.disableFocusTrap.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="preventScroll" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Prevent scroll</Form.Label>

        <Switch.Root {...attrs} {...constraints} bind:checked="{$props.preventScroll}" />
      </Form.Control>

      <Form.Description>
        {schema.shape.preventScroll.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Popover.Root {...$props}>
      <Popover.Trigger asChild let:builder>
        <Button builders="{[builder]}" variant="outline">Open</Button>
      </Popover.Trigger>

      <Popover.Content>
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Dimensions</h4>

            <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>

          <div class="grid gap-2">
            <div class="grid grid-cols-3 items-center gap-4">
              <Label for="width">Width</Label>

              <Input class="col-span-2 h-8" id="width" value="100%" variant="text" />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <Label for="maxWidth">Max. width</Label>

              <Input class="col-span-2 h-8" id="maxWidth" value="300px" variant="text" />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <Label for="height">Height</Label>

              <Input class="col-span-2 h-8" id="height" value="25px" variant="text" />
            </div>

            <div class="grid grid-cols-3 items-center gap-4">
              <Label for="maxHeight">Max. height</Label>

              <Input class="col-span-2 h-8" id="maxHeight" value="none" variant="text" />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  </svelte:fragment>
</ComponentDemoLayout>
