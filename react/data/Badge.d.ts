import * as React from 'react';
/** Filled, bordered status label — short uppercase words or counts. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'neutral' | 'info' | 'attention' | 'ok' | 'error';
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
