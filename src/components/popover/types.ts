import type { HTMLAttributes } from 'vue';
import type { PopoverContentProps } from 'reka-ui';

export interface PopoverProps {
  align?: PopoverContentProps['align'];
  alignOffset?: PopoverContentProps['alignOffset'];
  arrowPadding?: PopoverContentProps['arrowPadding'];
  avoidCollisions?: PopoverContentProps['avoidCollisions'];
  collisionBoundary?: PopoverContentProps['collisionBoundary'];
  collisionPadding?: PopoverContentProps['collisionPadding'];
  contentClass?: HTMLAttributes['class'];
  disableOutsidePointerEvents?: PopoverContentProps['disableOutsidePointerEvents'];
  disableUpdateOnLayoutShift?: PopoverContentProps['disableUpdateOnLayoutShift'];
  forceMount?: PopoverContentProps['forceMount'];
  hideWhenDetached?: PopoverContentProps['hideWhenDetached'];
  keepOpen?: boolean;
  positionStrategy?: PopoverContentProps['positionStrategy'];
  prioritizePosition?: PopoverContentProps['prioritizePosition'];
  reference?: PopoverContentProps['reference'];
  side?: PopoverContentProps['side'];
  sideOffset?: PopoverContentProps['sideOffset'];
  sticky?: PopoverContentProps['sticky'];
  updatePositionStrategy?: PopoverContentProps['updatePositionStrategy'];
}
