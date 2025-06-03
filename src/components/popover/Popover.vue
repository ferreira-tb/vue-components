<script setup lang="ts">
import type { VNode } from 'vue';
import type { PopoverProps } from './types';
import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger as BasePopoverTrigger,
} from '../__base/popover';

const props = defineProps<PopoverProps>();

const isOpen = defineModel<boolean>({ required: true });

defineSlots<{
  default: () => VNode;
  trigger: () => VNode;
}>();

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

function onPointerDownOutside() {
  if (!props.keepOpen) close();
}

defineExpose({ close, open });
</script>

<template>
  <BasePopover v-model:open="isOpen">
    <BasePopoverTrigger as-child>
      <slot name="trigger"></slot>
    </BasePopoverTrigger>
    <BasePopoverContent :class="contentClass" @pointer-down-outside="onPointerDownOutside">
      <slot></slot>
    </BasePopoverContent>
  </BasePopover>
</template>
