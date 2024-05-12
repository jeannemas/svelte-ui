<script context="module" lang="ts">
  import CirclePlus from 'lucide-svelte/icons/circle-plus';
  import Cloud from 'lucide-svelte/icons/cloud';
  import CreditCard from 'lucide-svelte/icons/credit-card';
  import Github from 'lucide-svelte/icons/github';
  import Keyboard from 'lucide-svelte/icons/keyboard';
  import LifeBuoy from 'lucide-svelte/icons/life-buoy';
  import LogOut from 'lucide-svelte/icons/log-out';
  import Mail from 'lucide-svelte/icons/mail';
  import MessageSquare from 'lucide-svelte/icons/message-square';
  import Plus from 'lucide-svelte/icons/plus';
  import Settings from 'lucide-svelte/icons/settings';
  import User from 'lucide-svelte/icons/user';
  import UserPlus from 'lucide-svelte/icons/user-plus';
  import Users from 'lucide-svelte/icons/users';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import Button from '$lib/components/button/index.js';
  import * as DropdownMenu from '$lib/components/dropdown-menu/index.js';
  import * as Form from '$lib/components/form/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';
  import Switch from '$lib/components/switch/index.js';

  const adapter = zod(
    z
      .object({
        closeOnEscape: z.boolean().default(true),
        closeOnItemClick: z.boolean().default(true),
        closeOnOutsideClick: z.boolean().default(true),
        dir: z.enum(DropdownMenu.rootDirs).default(DropdownMenu.rootDefaultDir),
        disableFocusFirstItem: z.boolean().default(false),
        loop: z.boolean().default(false),
        open: z.boolean().default(false),
        preventScroll: z.boolean().default(true),
        typeahead: z.boolean().default(true),
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
  <Form.Field name="closeOnEscape" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on escape</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnEscape}" />
    </Form.Control>

    <Form.Description>
      Whether or not to close the menu when the escape key is pressed.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="closeOnItemClick" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on item click</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnItemClick}" />
    </Form.Control>

    <Form.Description>
      Whether or not to close the menu when an internal item is clicked.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="closeOnOutsideClick" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Close on outside click</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.closeOnOutsideClick}" />
    </Form.Control>

    <Form.Description>
      Whether or not to close the menu when a click occurs outside of it.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="dir" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Direction</Form.Label>

      <Select.Root
        items="{DropdownMenu.rootDirs.map((dir) => ({
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
          {#each DropdownMenu.rootDirs as dir, index (index)}
            <Select.Item value="{dir}">
              {dir}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </Form.Control>

    <Form.Description>The direction of the text in the dropdown menu.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="disableFocusFirstItem" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Disable focus first item</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.disableFocusFirstItem}" />
    </Form.Control>

    <Form.Description>Optionally prevent focusing the first item in the menu.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="loop" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Loop</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.loop}" />
    </Form.Control>

    <Form.Description>Whether or not to loop the menu navigation.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="open" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Open</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.open}" />
    </Form.Control>

    <Form.Description>
      The open state of the context menu. You can bind this to a boolean value to programmatically
      control the open state.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="preventScroll" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Prevent scroll</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.preventScroll}" />
    </Form.Control>

    <Form.Description>Whether or not to prevent scrolling when the menu is open.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="typeahead" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Typeahead</Form.Label>

      <Switch {...attrs} {...constraints} bind:checked="{$superFormData.typeahead}" />
    </Form.Control>

    <Form.Description>Whether to use typeahead to automatically focus elements.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<DropdownMenu.Root
  closeOnEscape="{$superFormData.closeOnEscape}"
  closeOnItemClick="{$superFormData.closeOnItemClick}"
  closeOnOutsideClick="{$superFormData.closeOnOutsideClick}"
  dir="{$superFormData.dir}"
  disableFocusFirstItem="{$superFormData.disableFocusFirstItem}"
  loop="{$superFormData.loop}"
  preventScroll="{$superFormData.preventScroll}"
  typeahead="{$superFormData.typeahead}"
  bind:open="{$superFormData.open}"
>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders="{[builder]}" variant="outline">Open</Button>
  </DropdownMenu.Trigger>

  <DropdownMenu.Content class="w-56">
    <DropdownMenu.Label>My Account</DropdownMenu.Label>

    <DropdownMenu.Separator />

    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <User class="mr-2 h-4 w-4" />

        <span>Profile</span>

        <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <CreditCard class="mr-2 h-4 w-4" />

        <span>Billing</span>

        <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Settings class="mr-2 h-4 w-4" />

        <span>Settings</span>

        <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Keyboard class="mr-2 h-4 w-4" />

        <span>Keyboard shortcuts</span>

        <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
    </DropdownMenu.Group>

    <DropdownMenu.Separator />

    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <Users class="mr-2 h-4 w-4" />

        <span>Team</span>
      </DropdownMenu.Item>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>
          <UserPlus class="mr-2 h-4 w-4" />

          <span>Invite users</span>
        </DropdownMenu.SubTrigger>

        <DropdownMenu.SubContent>
          <DropdownMenu.Item>
            <Mail class="mr-2 h-4 w-4" />

            <span>Email</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <MessageSquare class="mr-2 h-4 w-4" />

            <span>Message</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <CirclePlus class="mr-2 h-4 w-4" />

            <span>More...</span>
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>

      <DropdownMenu.Item>
        <Plus class="mr-2 h-4 w-4" />

        <span>New Team</span>

        <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
    </DropdownMenu.Group>

    <DropdownMenu.Separator />

    <DropdownMenu.Item>
      <Github class="mr-2 h-4 w-4" />

      <span>GitHub</span>
    </DropdownMenu.Item>

    <DropdownMenu.Item>
      <LifeBuoy class="mr-2 h-4 w-4" />

      <span>Support</span>
    </DropdownMenu.Item>

    <DropdownMenu.Item>
      <Cloud class="mr-2 h-4 w-4" />

      <span>API</span>
    </DropdownMenu.Item>

    <DropdownMenu.Separator />

    <DropdownMenu.Item>
      <LogOut class="mr-2 h-4 w-4" />

      <span>Log out</span>

      <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
