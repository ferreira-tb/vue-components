<script setup lang="ts">
import type { CheckboxProps, CheckboxValue } from './types';
import { Checkbox as BaseCheckbox } from '../__base/checkbox';

defineProps<CheckboxProps>();

const value = defineModel<CheckboxValue>({ required: false });
</script>

<template>
  <BaseCheckbox v-model="value" :default-value :disabled />
</template>
