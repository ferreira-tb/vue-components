<script setup lang="ts">
import { cn } from '../../utils';
import type { InputProps } from './types';
import type { Option } from '@tb-dev/utils';
import { computed, useTemplateRef } from 'vue';
import { Input as BaseInput } from '../__base/input';

const props = defineProps<InputProps>();

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
}>();

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});

const component = useTemplateRef('inputComponent');
const inputEl = computed(() => {
  return component.value?.$el as Option<HTMLInputElement>;
});

function focus() {
  inputEl.value?.focus();
}

function blur() {
  inputEl.value?.blur();
}

function select() {
  inputEl.value?.select();
}

defineExpose({ inputEl, focus, blur, select });
</script>

<template>
  <BaseInput
    ref="inputComponent"
    v-model.trim="value as string | undefined"
    :type
    :autocomplete
    :autofocus
    :placeholder
    :disabled
    :maxlength="max"
    :minlength="min"
    :readonly
    :required
    :size
    :spellcheck
    :style
    :class="cn('focus-visible:ring-0 disabled:cursor-default', props.class)"
    @blur="onBlur"
  />
</template>
