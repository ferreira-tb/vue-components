<script setup lang="ts">
import { cn } from '../../utils';
import type { TextareaProps } from './types';
import { type Option, toPixel } from '@tb-dev/utils';
import { Textarea as BaseTextarea } from '../__base/textarea';
import { computed, type CSSProperties, useTemplateRef } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
  autocomplete: 'off',
  autocorrect: 'off',
  spellcheck: 'false',
});

const emit = defineEmits<{
  'update:modelValue': [value: null | string];
}>();

const textareaComponent = useTemplateRef('textareaComponent');
const textareaEl = computed(() => {
  return textareaComponent.value?.$el as Option<HTMLTextAreaElement>;
});

const value = computed<string | undefined>({
  // eslint-disable-next-line no-undefined
  get: () => props.modelValue ?? undefined,
  set: (it) => emit('update:modelValue', it ?? null),
});

const textareaHeight = computed<Option<CSSProperties>>(() => {
  return props.height ? { height: toPixel(props.height) } : null;
});

defineExpose({ textareaEl });
</script>

<template>
  <BaseTextarea
    ref="textareaComponent"
    v-bind="$attrs"
    v-model.trim="value as string | undefined"
    :autocapitalize
    :autocomplete
    :autocorrect
    :autofocus
    :cols
    :disabled
    :maxlength="max"
    :minlength="min"
    :placeholder
    :readonly
    :required
    :rows
    :spellcheck
    :style="[textareaHeight, style]"
    :class="
      cn(
        'size-full resize-none font-normal focus-visible:ring-0 disabled:cursor-default',
        props.class
      )
    "
    @blur="onBlur"
  />
</template>
