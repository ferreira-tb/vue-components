import type { Option } from '@tb-dev/utils';
import type { HTMLAttributes, SelectHTMLAttributes } from 'vue';

export interface SelectProps {
  autocomplete?: SelectHTMLAttributes['autocomplete'];
  autofocus?: SelectHTMLAttributes['autofocus'];
  contentClass?: HTMLAttributes['class'];
  disabled?: boolean;
  modelValue: Option<string>;
  placeholder?: string;
  required?: boolean;
  selectClass?: HTMLAttributes['class'];
  selectStyle?: HTMLAttributes['style'];
  triggerClass?: HTMLAttributes['class'];
}
