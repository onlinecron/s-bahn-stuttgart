import * as React from 'react';
/** Square "LED" state indicator with an optional uppercase label. */
export interface StatusLedProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "inactive" */
  status?: 'running' | 'pending' | 'inactive' | 'ok' | 'error';
  /** Override the label text, or pass `false` for the bare square. */
  label?: React.ReactNode | false;
  /** Edge length in px. @default 10 */
  size?: number;
}
export declare function StatusLed(props: StatusLedProps): JSX.Element;
