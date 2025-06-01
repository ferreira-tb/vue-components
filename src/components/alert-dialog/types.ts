import type { HTMLAttributes } from 'vue';

export interface AlertDialogProps {
  actionClass?: HTMLAttributes['class'];
  cancelClass?: HTMLAttributes['class'];
  contentClass?: HTMLAttributes['class'];
  descriptionClass?: HTMLAttributes['class'];
  footerClass?: HTMLAttributes['class'];
  headerClass?: HTMLAttributes['class'];
  titleClass?: HTMLAttributes['class'];
}
