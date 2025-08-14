<script setup lang="ts">
import { cn } from '../../utils';
import type { TableProps } from './types';
import { type Option, toPixel } from '@tb-dev/utils';
import { computed, type CSSProperties, type VNode } from 'vue';

const props = defineProps<TableProps>();

defineSlots<{ default: () => VNode; }>();

const containerHeight = computed<Option<CSSProperties>>(() => {
  return props.height ? { maxHeight: toPixel(props.height) } : null;
});

const containerWidth = computed<Option<CSSProperties>>(() => {
  return props.width ? { maxWidth: toPixel(props.width) } : null;
});
</script>

<template>
  <div
    data-slot="table-container"
    :style="[containerHeight, containerWidth, style]"
    :class="cn(
      'relative w-full',
      containerWidth ? 'overflow-x-auto' : 'overflow-x-hidden',
      containerHeight ? 'overflow-y-auto' : 'overflow-y-hidden',
      props.class,
    )"
  >
    <table
      data-slot="table"
      :style="tableStyle"
      :class="cn('w-full caption-bottom text-sm', props.tableClass)"
    >
      <slot></slot>
    </table>
  </div>
</template>
