<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Container from '$lib/components/container/index.js';
  import Label from '$lib/components/label/index.js';
  import Switch from '$lib/components/switch/index.js';

  const xAxisKey = 'xAxis';
  const yAxisKey = 'yAxis';
</script>

<script lang="ts">
  const xAxis = derived(page, ($page) => $page.url.searchParams.has(xAxisKey));
  const yAxis = derived(page, ($page) => $page.url.searchParams.has(yAxisKey));
</script>

<!-- <style lang="postcss">
</style> -->

<div data-form>
  <Label for="{xAxisKey}">X axis</Label>

  <Switch
    checked="{$xAxis}"
    id="{xAxisKey}"
    name="{xAxisKey}"
    onCheckedChange="{(checked) => {
      const url = new URL($page.url);

      if (checked) {
        url.searchParams.set(xAxisKey, '');
      } else {
        url.searchParams.delete(xAxisKey);
      }

      goto(url);
    }}"
  />

  <Label for="{yAxisKey}">Y axis</Label>

  <Switch
    checked="{$yAxis}"
    id="{yAxisKey}"
    name="{yAxisKey}"
    onCheckedChange="{(checked) => {
      const url = new URL($page.url);

      if (checked) {
        url.searchParams.set(yAxisKey, '');
      } else {
        url.searchParams.delete(yAxisKey);
      }

      goto(url);
    }}"
  />
</div>

<hr class="my-4 border-y border-border" />

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non beatae, cupiditate unde cumque facere
  laboriosam, ipsa quo, veritatis in similique est corrupti quibusdam. Itaque, unde laboriosam.
  Aliquid autem dolorem magni.
</p>

<Container class="bg-slate-300 transition-all duration-75" xAxis="{$xAxis}" yAxis="{$yAxis}">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sapiente nisi omnis temporibus
  veritatis nihil eligendi impedit similique quo, neque sequi voluptate, ipsum optio odit repellat
  ipsam quidem delectus libero.
</Container>

<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempora pariatur numquam quae
  enim cum aliquam rerum accusamus necessitatibus culpa, cupiditate, minima modi doloribus! Iure
  aperiam libero veniam aspernatur distinctio?
</p>
