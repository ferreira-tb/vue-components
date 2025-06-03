<script setup lang="ts" generic="T extends string">
import { cn } from '../../utils';
import { Button } from '../button';
import { computed, type VNode } from 'vue';
import { ButtonLink } from '../button-link';
import type { ButtonIconProps } from './types';

const props = defineProps<ButtonIconProps<T>>();

defineSlots<{ default?: () => VNode }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <ButtonLink
    v-if="to"
    v-bind="delegatedProps"
    :to
    variant="ghost"
    size="icon"
    :class="props.class"
    :button-class
  >
    <component :is="icon" :class="iconClass" :size="iconSize" />
  </ButtonLink>
  <Button
    v-else
    v-bind="delegatedProps"
    variant="ghost"
    size="icon"
    :class="cn(props.class, buttonClass)"
  >
    <component :is="icon" :class="iconClass" :size="iconSize" />
  </Button>
</template>
