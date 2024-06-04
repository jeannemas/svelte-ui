<script context="module" lang="ts">
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  import * as Button from '$lib/components/button/index.js';
  import * as Form from '$lib/components/form/index.js';
  import Input from '$lib/components/input/index.js';
  import * as Pagination from '$lib/components/pagination/index.js';
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
    <Form.Field name="count" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Count</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          step="{1}"
          variant="number"
          bind:value="{$props.count}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.count.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="perPage" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Per page</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          step="{1}"
          variant="number"
          bind:value="{$props.perPage}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.perPage.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>

    <Form.Field name="siblingCount" superForm="{form}" let:constraints>
      <Form.Control let:attrs>
        <Form.Label>Sibling count</Form.Label>

        <Input
          {...attrs}
          {...constraints}
          inputmode="numeric"
          step="{1}"
          variant="number"
          bind:value="{$props.siblingCount}"
        />
      </Form.Control>

      <Form.Description>
        {schema.shape.siblingCount.description}
      </Form.Description>

      <Form.FieldErrors />
    </Form.Field>
  </svelte:fragment>

  <svelte:fragment slot="demo">
    <Pagination.Root {...$props} let:pages let:currentPage>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.PreviousButton asChild let:builder>
            <Button.Root builders="{[builder]}" class="gap-x-1" variant="ghost">
              ←

              <span class="hidden sm:block">Previous</span>
            </Button.Root>
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
          <Pagination.NextButton asChild let:builder>
            <Button.Root builders="{[builder]}" class="gap-x-1" variant="ghost">
              <span class="hidden sm:block">Next</span>

              →
            </Button.Root>
          </Pagination.NextButton>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  </svelte:fragment>
</ComponentDemoLayout>
