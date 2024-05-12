<script context="module" lang="ts">
  import { toast } from 'svelte-sonner';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Sonner, {
    defaultDir,
    defaultPosition,
    defaultTheme,
    dirs,
    positions,
    themes,
  } from '$lib/components/sonner/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        closeButton: z.boolean().default(false),
        dir: z.enum(dirs).default(defaultDir),
        duration: z.number().int().default(4000),
        expand: z.boolean().default(false),
        gap: z.number().int().default(14),
        invert: z.boolean().default(false),
        offset: z.number().int().default(32),
        position: z.enum(positions).default(defaultPosition),
        richColors: z.boolean().default(false),
        theme: z.enum(themes).default(defaultTheme),
        visibleToasts: z.number().int().default(3),
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

<Form.Root superForm="{superForm}">
  <Form.Field name="closeButton" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close button</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeButton}" />
    </Form.Control>

    <Form.Description>Adds a close button to all toasts, shows on hover.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="dir" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Direction</Form.Label>

      <Select.Root
        items="{dirs.map((dir) => ({
          label: dir,
          value: dir,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.dir = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.dir !== undefined
          ? {
              label: $superFormData.dir,
              value: $superFormData.dir,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each dirs as dir, index (index)}
            <Select.Item value="{dir}">
              {dir}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>Directionality of toast's text.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="duration" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Duration</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        min="{100}"
        step="{100}"
        variant="number"
        bind:value="{$superFormData.duration}"
      />
    </Form.Control>

    <Form.Description>The duration of the toast in milliseconds.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="expand" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Expand</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.expand}" />
    </Form.Control>

    <Form.Description>Toasts will be expanded by default.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="gap" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Gap</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        min="{0}"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.gap}"
      />
    </Form.Control>

    <Form.Description>Gap between toasts when expanded, in pixels.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="invert" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Invert</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.invert}" />
    </Form.Control>

    <Form.Description>Dark toasts in light mode and vice versa.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="offset" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Offset</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        min="{0}"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.offset}"
      />
    </Form.Control>

    <Form.Description>Offset from the edges of the screen.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="position" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Position</Form.Label>

      <Select.Root
        items="{positions.map((position) => ({
          label: position,
          value: position,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.position = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.position !== undefined
          ? {
              label: $superFormData.position,
              value: $superFormData.position,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each positions as position, index (index)}
            <Select.Item value="{position}">
              {position}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>Directionality of toast's text.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="richColors" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Rich colors</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.richColors}" />
    </Form.Control>

    <Form.Description>Makes error and success state more colorful.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="theme" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Theme</Form.Label>

      <Select.Root
        items="{themes.map((theme) => ({
          label: theme,
          value: theme,
        }))}"
        onSelectedChange="{(selected) => {
          $superFormData.theme = selected?.value;
        }}"
        portal="{null}"
        selected="{$superFormData.theme !== undefined
          ? {
              label: $superFormData.theme,
              value: $superFormData.theme,
            }
          : undefined}"
      >
        <Select.Input {...attrs} {...constraints} />

        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>

        <Select.Content>
          {#each themes as theme, index (index)}
            <Select.Item value="{theme}">
              {theme}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>Toast's theme, either light, dark, or system.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="visibleToasts" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Visible toasts</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        min="{1}"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.visibleToasts}"
      />
    </Form.Control>

    <Form.Description>Amount of visible toasts.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Button
  variant="outline"
  on:click="{() =>
    toast.success('Event has been created', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      action: {
        label: 'Undo',
        onClick: () => console.info('Undo'),
      },
    })}"
>
  Show Toast
</Button>

<Separator />

<Sonner
  closeButton="{$superFormData.closeButton}"
  dir="{$superFormData.dir}"
  duration="{$superFormData.duration}"
  expand="{$superFormData.expand}"
  gap="{$superFormData.gap}"
  invert="{$superFormData.invert}"
  offset="{$superFormData.offset}"
  position="{$superFormData.position}"
  richColors="{$superFormData.richColors}"
  theme="{$superFormData.theme}"
  visibleToasts="{$superFormData.visibleToasts}"
/>
