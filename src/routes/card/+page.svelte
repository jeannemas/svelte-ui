<script context="module" lang="ts">
  import Button from '$lib/components/button/index.js';
  import * as Card from '$lib/components/card/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';
  import Separator from '$lib/components/separator/index.js';

  const frameworks = [
    {
      value: 'sveltekit',
      label: 'SvelteKit',
    },
    {
      value: 'next',
      label: 'Next.js',
    },
    {
      value: 'astro',
      label: 'Astro',
    },
    {
      value: 'nuxt',
      label: 'Nuxt.js',
    },
  ];
</script>

<script lang="ts">
</script>

<!-- <style lang="postcss">
</style> -->

<Separator />

<Card.Root>
  <Card.Header>
    <Card.Title>Create project</Card.Title>

    <Card.Description>Deploy your new project in one-click.</Card.Description>
  </Card.Header>

  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Name</Label>

          <Input id="name" placeholder="Name of your project" variant="text" />
        </div>

        <div class="flex flex-col space-y-1.5">
          <Label for="framework">Framework</Label>

          <Select.Root>
            <Select.Trigger id="framework">
              <Select.Value placeholder="Select" />
            </Select.Trigger>

            <Select.Content>
              {#each frameworks as framework}
                <Select.Item value="{framework.value}" label="{framework.label}">
                  {framework.label}
                </Select.Item>
              {/each}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
    </form>
  </Card.Content>

  <Card.Footer class="flex justify-between">
    <Button variant="outline">Cancel</Button>

    <Button>Deploy</Button>
  </Card.Footer>
</Card.Root>