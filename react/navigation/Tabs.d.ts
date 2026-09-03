import * as React from 'react';
export interface TabItem { value: string; label: React.ReactNode }
/** Boxed segment tabs; the active tab carries a 2px signal-blue underline. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: (string | TabItem)[];
  /** Value of the active tab. */
  value?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
