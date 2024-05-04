<script context="module" lang="ts">
  import Separator from '$lib/components/separator/index.js';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Pagination from '$lib/components/pagination/index.js';

  const adapter = zod(
    z.object({
      count: z.number().int().min(0).default(20),
      perPage: z.number().int().min(1).default(10).optional(),
      page: z.number().int().min(1).default(1).optional(),
      siblingCount: z.number().int().min(1).default(1).optional(),
    }),
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
  <Form.Field name="count" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Count</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.count}"
      />
    </Form.Control>

    <Form.Description>The total number of items to be paginated.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="perPage" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Per page</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.perPage}"
      />
    </Form.Control>

    <Form.Description>Number of items per page.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="page" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Page</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.page}"
      />
    </Form.Control>

    <Form.Description>
      The selected page. This updates as the users selects new pages. You can bind this to a value
      to programmatically control the value state.
    </Form.Description>

    <Form.FieldErrors />
  </Form.Field>

  <Form.Field name="siblingCount" superForm="{superForm}" let:constraints>
    <Form.Control let:attrs>
      <Form.Label>Sibling count</Form.Label>

      <Input
        {...attrs}
        {...constraints}
        inputmode="numeric"
        step="{1}"
        variant="number"
        bind:value="{$superFormData.siblingCount}"
      />
    </Form.Control>

    <Form.Description>Number of visible items before and after the current page.</Form.Description>

    <Form.FieldErrors />
  </Form.Field>
</Form.Root>

<Separator />

<Pagination.Root
  count="{$superFormData.count}"
  perPage="{$superFormData.perPage}"
  siblingCount="{$superFormData.siblingCount}"
  bind:page="{$superFormData.page}"
  let:pages
  let:currentPage
>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PreviousButton>
        <ChevronLeft class="h-4 w-4" />

        <span class="hidden sm:block">Previous</span>
      </Pagination.PreviousButton>
    </Pagination.Item>

    {#each pages as page (page.key)}
      {#if page.type === 'ellipsis'}
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
      {:else}
        <Pagination.Item>
          <Pagination.Link isActive="{currentPage === page.value}" page="{page}">
            {page.value}
          </Pagination.Link>
        </Pagination.Item>
      {/if}
    {/each}

    <Pagination.Item>
      <Pagination.NextButton>
        <span class="hidden sm:block">Next</span>

        <ChevronRight class="h-4 w-4" />
      </Pagination.NextButton>
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
