<script context="module" lang="ts">
  import AlignJustifyIcon from 'lucide-svelte/icons/align-justify';
  import XIcon from 'lucide-svelte/icons/x';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { writable } from 'svelte/store';
  import { tv, type VariantProps } from 'tailwind-variants';

  import * as Button from '$lib/components/button/index.js';
  import * as Collapsible from '$lib/components/collapsible/index.js';
  import Container from '$lib/components/container/index.js';
  import type { EmptyObject } from '$lib/utils/types.js';

  import { rootContext } from './context.js';

  /**
   * The attributes for the root.
   */
  export type Attributes = SvelteHTMLElements['div'];
  /**
   * The breakpoint of the root.
   */
  export type Breakpoint = NonNullable<VariantProps<typeof rootStyles>['breakpoint']>;
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
    default: EmptyObject;
  };

  /**
   * The styles for the root.
   */
  export const rootStyles = tv({
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
        sm: [''],
        md: [''],
        lg: [''],
      },
      viewport: {
        desktop: ['hidden'],
        mobile: ['block'],
      },
    },
  });
</script>

<script lang="ts">
  type $$Events = EmptyObject;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let breakpoint: Props['breakpoint'] = rootStyles.defaultVariants.breakpoint;
  export let open: Props['open'] = undefined;

  $: attributes = $$restProps as Attributes;

  const rootCtx = rootContext.set(writable());

  $: rootCtx.update(($ctx) => ({
    ...$ctx,
    breakpoint,
  }));
</script>

<!-- <style lang="postcss">
</style> -->

<!-- Desktop -->
<Container
  {...attributes}
  class="{rootStyles({
    breakpoint,
    class: attributes.class,
    viewport: 'desktop',
  })}"
  xAxis
>
  <div class="flex h-16 flex-row justify-between">
    <slot />
  </div>
</Container>

<!-- Mobile -->
<Collapsible.Root
  {...attributes}
  class="{rootStyles({
    breakpoint,
    class: attributes.class,
    viewport: 'mobile',
  })}"
  bind:open="{open}"
>
  <Collapsible.Trigger asChild let:builder>
    <Button.Root builders="{[builder]}" class="m-2" size="icon" type="button" variant="outline">
      {#if open}
        <XIcon />
      {:else}
        <AlignJustifyIcon />
      {/if}
    </Button.Root>
  </Collapsible.Trigger>

  <Collapsible.Content class="flex flex-col justify-between pb-2">
    <slot />
  </Collapsible.Content>
</Collapsible.Root>
