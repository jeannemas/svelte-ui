<script context="module" lang="ts">
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Container from '$lib/components/container/index.js';

  const xAxisKey = 'xAxis';
  const yAxisKey = 'yAxis';
</script>

<script lang="ts">
  const xAxis = derived(page, ($page) => $page.url.searchParams.has(xAxisKey));
  const yAxis = derived(page, ($page) => $page.url.searchParams.has(yAxisKey));
</script>

<style lang="postcss">
  label {
    @apply text-right font-bold;
  }

  [data-control] {
    @apply rounded border border-border px-2 py-1;
  }
</style>

<div class="grid grid-cols-[auto_1fr] justify-items-stretch gap-2">
  <label for="{xAxisKey}">X axis</label>

  <input
    checked="{$xAxis}"
    id="{xAxisKey}"
    name="{xAxisKey}"
    type="checkbox"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      if (currentTarget.checked) {
        url.searchParams.set(xAxisKey, '');
      } else {
        url.searchParams.delete(xAxisKey);
      }

      goto(url);
    }}"
  />

  <label for="{yAxisKey}">Y axis</label>

  <input
    checked="{$yAxis}"
    id="{yAxisKey}"
    name="{yAxisKey}"
    type="checkbox"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      if (currentTarget.checked) {
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

<Container class="bg-slate-300" xAxis="{$xAxis}" yAxis="{$yAxis}">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam sapiente nisi omnis temporibus
  veritatis nihil eligendi impedit similique quo, neque sequi voluptate, ipsum optio odit repellat
  ipsam quidem delectus libero.
</Container>

<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur tempora pariatur numquam quae
  enim cum aliquam rerum accusamus necessitatibus culpa, cupiditate, minima modi doloribus! Iure
  aperiam libero veniam aspernatur distinctio?
</p>
