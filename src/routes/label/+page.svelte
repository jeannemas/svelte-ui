<script context="module" lang="ts">
  import * as Accordion from '$lib/components/accordion/index.js';
  import Checkbox from '$lib/components/checkbox/index.js';
  import Label from '$lib/components/label/index.js';
</script>

<script lang="ts">
</script>

<!-- <style lang="postcss">
</style> -->

<Accordion.Root multiple value="{['demo']}">
  <Accordion.Item value="config">
    <Accordion.Trigger>Config</Accordion.Trigger>

    <Accordion.Content>
      <!--  -->
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item value="demo">
    <Accordion.Trigger>Demo</Accordion.Trigger>

    <Accordion.Content>
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />

        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
