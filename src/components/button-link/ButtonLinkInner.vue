<script setup lang="ts">
import type { VNode } from 'vue';
import { cn } from '../../utils';
import { Button } from '../button';
import type { ButtonLinkInnerProps } from './types';

const props = defineProps<ButtonLinkInnerProps>();

defineSlots<{ default?: () => VNode }>();
</script>

<template>
  <Button :disabled :size :variant :style :class="cn('size-full', props.buttonClass)">
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
  </Button>
</template>
