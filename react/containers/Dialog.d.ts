import * as React from 'react';
/** Modal panel with a 2px charcoal border over a flat charcoal scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  /** Footer action row, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Pixel width of the panel. @default 480 */
  width?: number;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element;
