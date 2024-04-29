<script context="module" lang="ts">
  import * as Breadcrumb from '$lib/components/breadcrumb/index.js';
  import Separator from '$lib/components/separator/index.js';
</script>

<script lang="ts">
</script>

<!-- <style lang="postcss">
</style> -->

<Separator />

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.Ellipsis />
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.Link href="#/docs/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>

    <Breadcrumb.Separator />

    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
