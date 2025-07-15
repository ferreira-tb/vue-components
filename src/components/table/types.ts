import type { HTMLAttributes } from 'vue';

export interface TableProps {
  class?: HTMLAttributes['class'];
  height?: number | string;
  style?: HTMLAttributes['style'];
  tableClass?: HTMLAttributes['class'];
  tableStyle?: HTMLAttributes['style'];
  width?: number | string;
}
