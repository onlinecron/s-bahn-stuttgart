import * as React from 'react';
export interface SelectOption { value: string; label: string }
/** Native select with the system's square chrome and a drawn caret. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Plain strings or {value,label} pairs. */
  options?: (string | SelectOption)[];
  hint?: string;
  error?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
