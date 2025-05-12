<script setup lang="ts">
import type { VNode } from 'vue';
import type { SwitchProps } from './types';
import { Switch as BaseSwitch } from '../__base/switch';

defineProps<SwitchProps>();

const toggled = defineModel<boolean>({ required: true });

defineSlots<{
  label?: () => VNode;
  thumb?: () => VNode;
}>();
</script>

<template>
  <BaseSwitch v-model="toggled" :disabled>
    <template v-if="$slots.thumb" #thumb>
      <slot name="thumb"></slot>
    </template>
  </BaseSwitch>
</template>
