import type { HTMLAttributes } from 'vue';

export interface DialogProps {
  contentClass?: HTMLAttributes['class'];
  descriptionClass?: HTMLAttributes['class'];
  footerClass?: HTMLAttributes['class'];
  headerClass?: HTMLAttributes['class'];
  titleClass?: HTMLAttributes['class'];
}
