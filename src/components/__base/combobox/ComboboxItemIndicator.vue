<script setup lang="ts">
import type { ComboboxItemIndicatorProps } from 'reka-ui';
import { cn } from '../../../utils';
import { ComboboxItemIndicator, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

const props = defineProps<ComboboxItemIndicatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <ComboboxItemIndicator
    data-slot="combobox-item-indicator"
    v-bind="forwarded"
    :class="cn('ml-auto', props.class)"
  >
    <slot></slot>
  </ComboboxItemIndicator>
</template>
