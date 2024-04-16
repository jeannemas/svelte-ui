<script context="module" lang="ts">
  import { parseDate } from '@internationalized/date';
  import { derived } from 'svelte/store';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import * as Calendar from '$lib/components/calendar/index.js';
  import Label from '$lib/components/label/index.js';
  import * as Select from '$lib/components/select/index.js';

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
  <Label for="{disabledKey}">Disabled</Label>

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

  <Label for="{valueKey}">Value</Label>

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

  <Label for="{weekdayFormatKey}">Weekday format</Label>

  <Select.Root
    items="{weekdayFormatKeys.map((weekdayFormatKey) => ({
      label: weekdayFormatKey,
      value: weekdayFormatKey,
    }))}"
    onSelectedChange="{(selected) => {
      const url = new URL($page.url);

      if (selected) {
        url.searchParams.set(weekdayFormatKey, selected.value);
      } else {
        url.searchParams.delete(weekdayFormatKey);
      }

      goto(url);
    }}"
    portal="{null}"
    selected="{$weekdayFormat !== undefined
      ? {
          label: $weekdayFormat,
          value: $weekdayFormat,
        }
      : undefined}"
  >
    <Select.Input id="{weekdayFormatKey}" name="{weekdayFormatKey}" />

    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>

    <Select.Content>
      {#each weekdayFormatKeys as weekdayFormatKey, index (index)}
        <Select.Item value="{weekdayFormatKey}">
          {weekdayFormatKey}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>

  <Label for="{weekStartsOnKey}">Week starts on</Label>

  <Select.Root
    items="{weekStartsOnKeys.map((weekStartsOnKey) => ({
      label: weekStartsOnKey.toString(),
      value: weekStartsOnKey,
    }))}"
    onSelectedChange="{(selected) => {
      const url = new URL($page.url);

      if (selected) {
        url.searchParams.set(weekStartsOnKey, selected.value.toString());
      } else {
        url.searchParams.delete(weekStartsOnKey);
      }

      goto(url);
    }}"
    portal="{null}"
    selected="{$weekStartsOn !== undefined
      ? {
          label: $weekStartsOn.toString(),
          value: $weekStartsOn,
        }
      : undefined}"
  >
    <Select.Input id="{weekStartsOnKey}" name="{weekStartsOnKey}" />

    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>

    <Select.Content>
      {#each weekStartsOnKeys as weekStartsOnKey, index (index)}
        <Select.Item value="{weekStartsOnKey}">
          {weekStartsOnKey}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
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
