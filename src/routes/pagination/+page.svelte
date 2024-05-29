<script context="module" lang="ts">
  import { superForm as createSuperForm, defaults } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import z from 'zod';

  import * as Accordion from '$lib/components/accordion/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Pagination from '$lib/components/pagination/index.js';
</script>

<script lang="ts">
  const adapter = zod(
    z.object({
      count: z.number().int().min(0).default(20),
      perPage: z.number().int().min(1).default(10).optional(),
      siblingCount: z.number().int().min(1).default(1).optional(),
    }),
  );
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

          <Form.Description>
            Number of visible items before and after the current page.
          </Form.Description>

          <Form.FieldErrors />
        </Form.Field>
      </Form.Root>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <Pagination.Root {...$superFormData} let:pages let:currentPage>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.PreviousButton>
              &lt;

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

              &gt;
            </Pagination.NextButton>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination.Root>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
