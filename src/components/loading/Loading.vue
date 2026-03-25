<script setup lang="ts">
import { cn } from '../../utils';
import { LoaderCircle } from '@lucide/vue';
import type { LoadingProps } from './types';

const props = defineProps<LoadingProps>();
</script>

<template>
  <div :class="cn('flex size-full items-center justify-center', props.class)">
    <component :is="icon ?? LoaderCircle" :class="cn('loading-icon size-6', iconClass)" />
  </div>
</template>

<style scoped>
.loading-icon {
  animation-duration: 1500ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: spin;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
