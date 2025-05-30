import type { HTMLAttributes } from 'vue';

export interface TableProps {
  bodyClass?: HTMLAttributes['class'];
  bodyStyle?: HTMLAttributes['style'];
  captionClass?: HTMLAttributes['class'];
  captionStyle?: HTMLAttributes['style'];
  class?: HTMLAttributes['class'];
  footerClass?: HTMLAttributes['class'];
  footerStyle?: HTMLAttributes['style'];
  headerClass?: HTMLAttributes['class'];
  headerStyle?: HTMLAttributes['style'];
  height?: number | string;
  style?: HTMLAttributes['style'];
  tableClass?: HTMLAttributes['class'];
  tableStyle?: HTMLAttributes['style'];
  width?: number | string;
}

export interface TableLinkProps<T extends string> {
  label?: string;
  linkClass?: HTMLAttributes['class'];
  to: T;
}
