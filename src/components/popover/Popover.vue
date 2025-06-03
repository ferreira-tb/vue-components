<script setup lang="ts">
import type { VNode } from 'vue';
import { Popover as BasePopover, PopoverTrigger as BasePopoverTrigger } from '../__base/popover';

const open = defineModel<boolean>({ required: true });

defineSlots<{
  default: () => VNode;
  trigger: () => VNode;
}>();
</script>

<template>
  <BasePopover v-model:open="open">
    <BasePopoverTrigger as-child>
      <slot name="trigger"></slot>
    </BasePopoverTrigger>
    <slot></slot>
  </BasePopover>
</template>
