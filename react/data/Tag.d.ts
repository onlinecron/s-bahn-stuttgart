import * as React from 'react';
/** Removable filter chip — sentence case, hairline border, no fill emphasis. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the × affordance and handle removal. */
  onRemove?: () => void;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
