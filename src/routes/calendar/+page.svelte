<script context="module" lang="ts">
  import { parseDate } from '@internationalized/date';
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import * as Calendar from '$lib/components/calendar/index.js';

  const calendarLabelKey = 'calendarLabel';
  const disabledKey = 'disabled';
  const valueKey = 'value';
  const weekdayFormatKey = 'weekdayFormat';
  const weekdayFormatKeys = ['long', 'narrow', 'short'];
  const weekStartsOnKey = 'weekStartsOn';
  const weekStartsOnKeys = [0, 1, 2, 3, 4, 5, 6];
</script>

<script lang="ts">
  const calendarLabel = derived(
    page,
    ($page) => $page.url.searchParams.get(calendarLabelKey) ?? undefined,
  );
  const disabled = derived(page, ($page) => $page.url.searchParams.has(disabledKey));
  const value = derived(page, ($page) => {
    if (!$page.url.searchParams.has(valueKey)) {
      return undefined;
    }

    const value = $page.url.searchParams.get(valueKey)!;

    try {
      return parseDate(value);
    } catch {
      return undefined;
    }
  });
  const weekdayFormat = derived(page, ($page) => {
    const weekdayFormat = $page.url.searchParams.get(weekdayFormatKey);

    return weekdayFormat && weekdayFormatKeys.includes(weekdayFormat)
      ? (weekdayFormat as Calendar.RootProps['weekdayFormat'])
      : 'narrow';
  });
  const weekStartsOn = derived(page, ($page) => {
    const weekStartsOn = Number($page.url.searchParams.get(weekStartsOnKey));

    return weekStartsOn && weekStartsOnKeys.includes(weekStartsOn)
      ? (weekStartsOn as Calendar.RootProps['weekStartsOn'])
      : 0;
  });
</script>

<!-- <style lang="postcss">
</style> -->

<div data-form>
  <label for="{disabledKey}" data-label>Disabled</label>

  <input
    checked="{$disabled}"
    id="{disabledKey}"
    name="{disabledKey}"
    type="checkbox"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      if (currentTarget.checked) {
        url.searchParams.set(disabledKey, '');
      } else {
        url.searchParams.delete(disabledKey);
      }

      goto(url);
    }}"
  />

  <label for="{valueKey}" data-label>Value</label>

  <textarea
    class="font-mono"
    disabled
    id="{valueKey}"
    name="{valueKey}"
    readonly
    rows="{10}"
    value="{JSON.stringify($value, null, 2)}"
    data-control
  ></textarea>

  <label for="{weekdayFormatKey}" data-label>Weekday format</label>

  <select
    class="capitalize"
    id="{weekdayFormatKey}"
    name="{weekdayFormatKey}"
    value="{$weekdayFormat}"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(weekdayFormatKey, currentTarget.value);

      goto(url);
    }}"
  >
    {#each weekdayFormatKeys as weekdayFormatKey, index (index)}
      <option selected="{weekdayFormatKey === $weekdayFormat}" value="{weekdayFormatKey}">
        {weekdayFormatKey}
      </option>
    {/each}
  </select>

  <label for="{weekStartsOnKey}" data-label>Week starts on</label>

  <select
    class="capitalize"
    id="{weekStartsOnKey}"
    name="{weekStartsOnKey}"
    value="{$weekStartsOn}"
    data-control
    on:change="{({ currentTarget }) => {
      const url = new URL($page.url);

      url.searchParams.set(weekStartsOnKey, currentTarget.value);

      goto(url);
    }}"
  >
    {#each weekStartsOnKeys as weekStartsOnKey, index (index)}
      <option selected="{weekStartsOnKey === $weekStartsOn}" value="{weekStartsOnKey}">
        {weekStartsOnKey}
      </option>
    {/each}
  </select>
</div>

<hr class="my-4 border-y border-border" />

<Calendar.Root
  calendarLabel="{$calendarLabel}"
  class="inline-block rounded-md border border-border"
  disabled="{$disabled}"
  onValueChange="{(value) => {
    const url = new URL($page.url);

    if (!value) {
      url.searchParams.delete(valueKey);
    } else {
      url.searchParams.set(valueKey, value.toString());
    }

    goto(url);
  }}"
  value="{$value}"
  weekdayFormat="{$weekdayFormat}"
  weekStartsOn="{$weekStartsOn}"
/>
