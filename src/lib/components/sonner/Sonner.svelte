<script context="module" lang="ts">
  import { Toaster } from 'svelte-sonner';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  import type { ComponentInfo, EmptyObject } from '$lib/utils/types.js';

  type Primitive = ComponentInfo<Toaster>;

  /**
   * The attributes of the sonner.
   */
  export type Attributes = Omit<SvelteHTMLElements['ol'], 'dir'>;
  /**
   * The direction of the sonner.
   */
  export type Dir = NonNullable<VariantProps<typeof sonnerStyles>['dir']>;
  /**
   * The position of the sonner.
   */
  export type Position = NonNullable<VariantProps<typeof sonnerStyles>['position']>;
  /**
   * The props of the sonner.
   */
  export type Props = Omit<Primitive['props'], keyof Attributes>;
  /**
   * The slots of the sonner.
   */
  export type Slots = /* Primitive['slots'] */ EmptyObject; // TODO
  /**
   * The theme of the sonner.
   */
  export type Theme = NonNullable<VariantProps<typeof sonnerStyles>['theme']>;

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
  export const sonnerStyles = tv({
    base: ['toaster group'],
    defaultVariants: {
      dir: 'auto',
      position: 'bottom-right',
      theme: 'light',
    },
    variants: {
      dir: {
        auto: [''],
        ltr: [''],
        rtl: [''],
      },
      position: {
        'top-left': [''],
        'top-right': [''],
        'bottom-left': [''],
        'bottom-right': [''],
        'top-center': [''],
        'bottom-center': [''],
      },
      theme: {
        light: [''],
        dark: [''],
        system: [''],
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
</script>

<script lang="ts">
  type $$Events = Primitive['events'];
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
  class="{sonnerStyles({
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
