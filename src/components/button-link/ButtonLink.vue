<script setup lang="ts" generic="T extends string">
import type { VNode } from 'vue';
import { RouterLink } from 'vue-router';
import type { ButtonLinkProps } from './types';
import ButtonLinkInner from './ButtonLinkInner.vue';

withDefaults(defineProps<ButtonLinkProps<T>>(), {
  size: 'default',
  variant: 'ghost',
});

defineSlots<{ default?: () => VNode }>();
</script>

<template>
  <div v-if="disabled">
    <ButtonLinkInner :label :size :variant :style :button-class />
  </div>
  <RouterLink v-else :to="{ name: to }">
    <ButtonLinkInner :label :size :variant :style :button-class />
  </RouterLink>
</template>
