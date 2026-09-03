import * as React from 'react';
/** System message strip with a solid signal bar on the left edge. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: 'info' | 'attention' | 'ok' | 'error';
  title?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
}
export declare function Toast(props: ToastProps): JSX.Element;
