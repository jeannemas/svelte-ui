<script context="module" lang="ts">
  import AlignJustifyIcon from 'lucide-svelte/icons/align-justify';
  import XIcon from 'lucide-svelte/icons/x';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';
  import Container from '$lib/components/container/index.js';
  import type { Events, Slot } from '$lib/utils/types.js';

  /**
   * The attributes for the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The breakpoint of the root.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof styles>['breakpoint']>;
  /**
   * The props for the root.
   */
  export type Props = {
    /**
     * The breakpoint of the root.
     *
     * @default 'lg'
     */
    breakpoint?: Breakpoint;
    /**
     * Whether the mobile navbar is open.
     */
    open?: boolean;
  };
  /**
   * The slots for the root.
   */
  export type Slots = {
    default: Slot;
  };

  /**
   * The styles for the root.
   */
  export const styles = tv({
    base: ['bg-background text-foreground shadow'],
    compoundVariants: [
      {
        breakpoint: 'sm',
        class: ['sm:block'],
        viewport: 'desktop',
      },
      {
        breakpoint: 'sm',
        class: ['sm:hidden'],
        viewport: 'mobile',
      },
      {
        breakpoint: 'md',
        class: ['md:block'],
        viewport: 'desktop',
      },
      {
        breakpoint: 'md',
        class: ['md:hidden'],
        viewport: 'mobile',
      },
      {
        breakpoint: 'lg',
        class: ['lg:block'],
        viewport: 'desktop',
      },
      {
        breakpoint: 'lg',
        class: ['lg:hidden'],
        viewport: 'mobile',
      },
    ],
    defaultVariants: {
      breakpoint: 'lg',
    },
    variants: {
      breakpoint: {
        sm: [] as string[],
        md: [] as string[],
        lg: [] as string[],
      },
      viewport: {
        desktop: ['hidden'],
        mobile: ['block'],
      },
    },
  });
  /**
   * The breakpoints of the root.
   */
  export const breakpoints = Object.keys(styles.variants.breakpoint) as [
    Breakpoint,
    ...Breakpoint[],
  ];
  /**
   * The default breakpoint of the root.
   */
  export const defaultBreakpoint = styles.defaultVariants.breakpoint!;
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = undefined;
  export let open: Props['open'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<!-- Desktop -->
<Container
  {...attributes}
  class="{styles({
    breakpoint,
    class: attributes.class,
    viewport: 'desktop',
  })}"
  xAxis
  data-breakpoint="{breakpoint}"
  data-viewport="desktop"
>
  <div class="flex h-16 flex-row justify-between">
    <slot />
  </div>
</Container>

<!-- Mobile -->
<Collapsible.Root
  {...attributes}
  class="{styles({
    breakpoint,
    class: attributes.class,
    viewport: 'mobile',
  })}"
  data-breakpoint="{breakpoint}"
  data-viewport="mobile"
  bind:open="{open}"
>
  <Collapsible.Trigger asChild let:builder>
    <Button builders="{[builder]}" class="m-2" size="icon" type="button" variant="outline">
      {#if open}
        <XIcon />
      {:else}
        <AlignJustifyIcon />
      {/if}
    </Button>
  </Collapsible.Trigger>

  <Collapsible.Content class="flex flex-col justify-between pb-2">
    <slot />
  </Collapsible.Content>
</Collapsible.Root>
