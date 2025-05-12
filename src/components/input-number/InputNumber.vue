<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils';
import type { InputNumberProps } from './types';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '../__base/number-field';

const props = withDefaults(defineProps<InputNumberProps>(), {
  formatOptions: () => ({ useGrouping: false }),
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: null | number): void;
}>();

const value = computed<number | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});
</script>

<template>
  <NumberField
    v-model="value"
    :default-value
    :disabled
    :disable-wheel-change
    :format-options
    :min
    :max
    :step
    :step-snapping
    :style
    :class="cn('w-full', props.class)"
  >
    <NumberFieldContent>
      <NumberFieldDecrement :disabled="disabled || disableDecrement" />
      <NumberFieldInput />
      <NumberFieldIncrement :disabled="disabled || disableIncrement" />
    </NumberFieldContent>
  </NumberField>
</template>
