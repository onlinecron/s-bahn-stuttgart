import * as React from 'react';
/** Charcoal instant tooltip — no fade, no arrow. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: React.ReactNode;
  /** @default "top" */
  placement?: 'top' | 'bottom';
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
