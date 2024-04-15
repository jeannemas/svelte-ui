<script context="module" lang="ts">
  import Button from '$lib/components/button/index.js';
  import Input from '$lib/components/input/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Popover from '$lib/components/popover/index.js';
</script>

<script lang="ts">
</script>

<!-- <style lang="postcss">
</style> -->

<Popover.Root portal="{null}">
  <Popover.Trigger asChild let:builder>
    <Button builders="{[builder]}" variant="outline">Open</Button>
  </Popover.Trigger>

  <Popover.Content class="w-80">
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
