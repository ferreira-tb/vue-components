<script setup lang="ts">
import { cn } from '../../../utils';
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaViewport,
} from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';
import ScrollBar from './ScrollBar.vue';

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ScrollAreaRoot
    data-slot="scroll-area"
    v-bind="delegatedProps"
    :class="cn('relative', props.class)"
  >
    <ScrollAreaViewport
      data-slot="scroll-area-viewport"
      class="size-full rounded-[inherit] transition-[color,box-shadow] outline-none"
    >
      <slot></slot>
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
