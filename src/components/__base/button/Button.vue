<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '../../../utils';
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: HTMLAttributes['class'];
  type?: 'button' | 'submit';
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button',
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :type
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot></slot>
  </Primitive>
</template>
