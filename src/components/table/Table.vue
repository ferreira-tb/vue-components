<script setup lang="ts">
import { cn } from '../../utils';
import type { TableProps } from './types';
import { type Option, toPixel } from '@tb-dev/utils';
import { computed, type CSSProperties, type VNode } from 'vue';
import { TableBody, TableCaption, TableFooter, TableHeader } from '../__base/table';

const props = defineProps<TableProps>();

defineSlots<{
  caption?: () => VNode;
  default: () => VNode;
  footer?: () => VNode;
  header?: () => VNode;
}>();

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
    :class="
      cn(
        'relative w-full',
        containerWidth ? 'overflow-x-auto' : 'overflow-x-hidden',
        containerHeight ? 'overflow-y-auto' : 'overflow-y-hidden',
        props.class
      )
    "
  >
    <table
      data-slot="table"
      :style="tableStyle"
      :class="cn('w-full caption-bottom text-sm', props.tableClass)"
    >
      <TableCaption v-if="$slots.caption" :style="captionStyle" :class="captionClass">
        <slot name="caption"></slot>
      </TableCaption>
      <TableHeader v-if="$slots.header" :style="headerStyle" :class="headerClass">
        <slot name="header"></slot>
      </TableHeader>
      <TableBody :style="bodyStyle" :class="bodyClass">
        <slot></slot>
      </TableBody>
      <TableFooter v-if="$slots.footer" :style="footerStyle" :class="footerClass">
        <slot name="footer"></slot>
      </TableFooter>
    </table>
  </div>
</template>
