<script setup lang="ts">
import type { VNode } from 'vue';
import type { DialogProps } from './types';
import {
  Dialog as BaseDialog,
  DialogContent as BaseDialogContent,
  DialogDescription as BaseDialogDescription,
  DialogFooter as BaseDialogFooter,
  DialogHeader as BaseDialogHeader,
  DialogTitle as BaseDialogTitle,
  DialogTrigger as BaseDialogTrigger,
} from '../__base/dialog';

defineProps<DialogProps>();

const isOpen = defineModel<boolean>({ required: true });

defineSlots<{
  default: () => VNode;
  description?: () => VNode;
  footer?: () => VNode;
  title?: () => VNode;
  trigger: () => VNode;
}>();
</script>

<template>
  <BaseDialog v-model="isOpen">
    <BaseDialogTrigger>
      <slot name="trigger"></slot>
    </BaseDialogTrigger>

    <BaseDialogContent :class="contentClass">
      <BaseDialogHeader v-if="$slots.title" :class="headerClass">
        <BaseDialogTitle :class="titleClass">
          <slot name="title"></slot>
        </BaseDialogTitle>
        <BaseDialogDescription v-if="$slots.description" :class="descriptionClass">
          <slot name="description"></slot>
        </BaseDialogDescription>
      </BaseDialogHeader>

      <BaseDialogFooter v-if="$slots.footer" :class="footerClass">
        <slot name="footer"></slot>
      </BaseDialogFooter>

      <slot></slot>
    </BaseDialogContent>
  </BaseDialog>
</template>
