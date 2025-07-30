import type { Option } from '@tb-dev/utils';
import type { CheckboxRootProps } from 'reka-ui';

export function toBooleanCheckboxValue(value: Option<CheckboxRootProps['modelValue']>): boolean {
  return value === true;
}
