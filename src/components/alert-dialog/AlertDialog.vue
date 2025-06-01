<script setup lang="ts">
import type { VNode } from 'vue';
import type { AlertDialogProps } from './types';
import {
  AlertDialog as BaseAlertDialog,
  AlertDialogAction as BaseAlertDialogAction,
  AlertDialogCancel as BaseAlertDialogCancel,
  AlertDialogContent as BaseAlertDialogContent,
  AlertDialogDescription as BaseAlertDialogDescription,
  AlertDialogFooter as BaseAlertDialogFooter,
  AlertDialogHeader as BaseAlertDialogHeader,
  AlertDialogTitle as BaseAlertDialogTitle,
  AlertDialogTrigger as BaseAlertDialogTrigger,
} from '../__base/alert-dialog';

defineProps<AlertDialogProps>();

defineSlots<{
  action?: () => VNode;
  cancel?: () => VNode;
  description?: () => VNode;
  title?: () => VNode;
  trigger: () => VNode;
}>();
</script>

<template>
  <BaseAlertDialog>
    <BaseAlertDialogTrigger>
      <slot name="trigger"></slot>
    </BaseAlertDialogTrigger>

    <BaseAlertDialogContent :class="contentClass">
      <BaseAlertDialogHeader :class="headerClass">
        <BaseAlertDialogTitle v-if="$slots.title" :class="titleClass">
          <slot name="title"></slot>
        </BaseAlertDialogTitle>
        <BaseAlertDialogDescription v-if="$slots.description" :class="descriptionClass">
          <slot name="description"></slot>
        </BaseAlertDialogDescription>
      </BaseAlertDialogHeader>

      <BaseAlertDialogFooter :class="footerClass">
        <BaseAlertDialogAction v-if="$slots.action" :class="actionClass">
          <slot name="action"></slot>
        </BaseAlertDialogAction>
        <BaseAlertDialogCancel v-if="$slots.cancel" :class="cancelClass">
          <slot name="cancel"></slot>
        </BaseAlertDialogCancel>
      </BaseAlertDialogFooter>
    </BaseAlertDialogContent>
  </BaseAlertDialog>
</template>
