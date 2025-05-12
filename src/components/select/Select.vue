<script setup lang="ts">
import { cn } from '../../utils';
import type { SelectProps } from './types';
import { computed, type VNode } from 'vue';
import {
  Select as BaseSelect,
  SelectContent as BaseSelectContent,
  SelectTrigger as BaseSelectTrigger,
  SelectValue as BaseSelectValue,
} from '../__base/select';

const props = defineProps<SelectProps>();

const emit = defineEmits<{
  'update:modelValue': [value: string | null];
}>();

defineSlots<{
  action?: () => VNode;
  default?: () => VNode;
}>();

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});
</script>

<template>
  <div class="flex w-full items-center justify-center gap-2">
    <BaseSelect
      v-model="value"
      :autocomplete
      :autofocus
      :disabled
      :required
      :style="selectStyle"
      :class="selectClass"
    >
      <BaseSelectTrigger :class="cn('w-full', triggerClass)">
        <BaseSelectValue :placeholder />
      </BaseSelectTrigger>
      <BaseSelectContent :class="contentClass">
        <slot></slot>
      </BaseSelectContent>
    </BaseSelect>

    <slot name="action"></slot>
  </div>
</template>
