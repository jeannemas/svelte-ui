<script context="module" lang="ts">
  import { Toaster, type ToasterProps } from 'svelte-sonner';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { Events } from '$lib/utils/types.js';

  /**
   * The attributes of the sonner.
   */
  export type Attributes = Omit<SvelteHTMLElements['ol'], 'dir'>;
  /**
   * The direction of the sonner.
   */
  export type Dir = NonNullable<VariantProps<typeof styles>['dir']>;
  /**
   * The position of the sonner.
   */
  export type Position = NonNullable<VariantProps<typeof styles>['position']>;
  /**
   * The props of the sonner.
   */
  export type Props = Omit<ToasterProps, keyof Attributes>;
  /**
   * The slots of the sonner.
   */
  export type Slots = /* ComponentSlots<Toaster> */ Record<never, never>;
  /**
   * The theme of the sonner.
   */
  export type Theme = NonNullable<VariantProps<typeof styles>['theme']>;

  /**
   * The styles of the sonner action button.
   */
  export const actionButtonStyles = tv({
    base: ['group-[.toast]:bg-primary group-[.toast]:text-primary-foreground'],
  });
  /**
   * The styles of the sonner cancel button.
   */
  export const cancelButtonStyles = tv({
    base: ['group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'],
  });
  /**
   * The styles of the sonner description.
   */
  export const descriptionStyles = tv({
    base: ['group-[.toast]:text-muted-foreground'],
  });
  /**
   * The styles of the sonner.
   */
  export const styles = tv({
    base: ['toaster group'],
    defaultVariants: {
      dir: 'auto',
      position: 'bottom-right',
      theme: 'light',
    },
    variants: {
      dir: {
        auto: [] as string[],
        ltr: [] as string[],
        rtl: [] as string[],
      },
      position: {
        'top-left': [] as string[],
        'top-right': [] as string[],
        'bottom-left': [] as string[],
        'bottom-right': [] as string[],
        'top-center': [] as string[],
        'bottom-center': [] as string[],
      },
      theme: {
        light: [] as string[],
        dark: [] as string[],
        system: [] as string[],
      },
    },
  });
  /**
   * The styles of the sonner toast.
   */
  export const toastStyles = tv({
    base: [
      'toast group',
      'group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-lg',
    ],
  });
  /**
   * The default direction of the sonner.
   */
  export const defaultDir = styles.defaultVariants.dir!;
  /**
   * The default position of the sonner.
   */
  export const defaultPosition = styles.defaultVariants.position!;
  /**
   * The default theme of the sonner.
   */
  export const defaultTheme = styles.defaultVariants.theme!;
  /**
   * The directions of the sonner.
   */
  export const dirs = Object.keys(styles.variants.dir) as [Dir, ...Dir[]];
  /**
   * The positions of the sonner.
   */
  export const positions = Object.keys(styles.variants.position) as [Position, ...Position[]];
  /**
   * The themes of the sonner.
   */
  export const themes = Object.keys(styles.variants.theme) as [Theme, ...Theme[]];
</script>

<script lang="ts">
  type $$Events = Events;
  type $$Props = Attributes & Props;
  type $$Slots = Slots;

  export let closeButton: Props['closeButton'] = undefined;
  export let dir: Props['dir'] = undefined;
  export let duration: Props['duration'] = undefined;
  export let expand: Props['expand'] = undefined;
  export let gap: Props['gap'] = undefined;
  export let hotkey: Props['hotkey'] = undefined;
  export let invert: Props['invert'] = undefined;
  export let offset: Props['offset'] = undefined;
  export let position: Props['position'] = undefined;
  export let richColors: Props['richColors'] = undefined;
  export let theme: Props['theme'] = undefined;
  export let toastOptions: Props['toastOptions'] = undefined;
  export let visibleToasts: Props['visibleToasts'] = undefined;

  $: attributes = $$restProps as Attributes;
</script>

<!-- <style lang="postcss">
</style> -->

<Toaster
  {...attributes}
  class="{styles({
    class: attributes.class,
    dir,
    position,
    theme,
  })}"
  closeButton="{closeButton}"
  dir="{dir}"
  duration="{duration}"
  expand="{expand}"
  gap="{gap}"
  hotkey="{hotkey}"
  invert="{invert}"
  offset="{offset}"
  position="{position}"
  richColors="{richColors}"
  theme="{theme}"
  toastOptions="{{
    ...toastOptions,
    classes: {
      ...toastOptions?.classes,
      actionButton: actionButtonStyles({
        class: toastOptions?.classes?.actionButton,
      }),
      cancelButton: cancelButtonStyles({
        class: toastOptions?.classes?.cancelButton,
      }),
      description: descriptionStyles({
        class: toastOptions?.classes?.description,
      }),
      toast: toastStyles({
        class: toastOptions?.classes?.toast,
      }),
    },
  }}"
  visibleToasts="{visibleToasts}"
  data-dir="{dir}"
  data-position="{position}"
  data-theme="{theme}"
>
  <!-- <slot name="loading-icon" slot="loading-icon">
    <Loader visible="{toast.type === 'loading'}" />
  </slot>

  <slot name="success-icon" slot="success-icon">
    <Icon type="success" />
  </slot>

  <slot name="error-icon" slot="error-icon">
    <Icon type="error" />
  </slot>

  <slot name="warning-icon" slot="warning-icon">
    <Icon type="warning" />
  </slot>

  <slot name="info-icon" slot="info-icon">
    <Icon type="info" />
  </slot> -->
</Toaster>
