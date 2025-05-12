import type { HTMLAttributes } from 'vue';
import type { Option } from '@tb-dev/utils';
import type { ButtonSize, ButtonVariant } from '../button';

export interface ButtonLinkInnerProps {
  buttonClass?: HTMLAttributes['class'];
  disabled?: Option<boolean>;
  label?: Option<string>;
  size?: ButtonSize;
  style?: HTMLAttributes['style'];
  variant?: ButtonVariant;
}

export interface ButtonLinkProps<T extends string> extends ButtonLinkInnerProps {
  to: T;
}
