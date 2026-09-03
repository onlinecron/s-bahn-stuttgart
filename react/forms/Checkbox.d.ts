import * as React from 'react';
/** Square 16px checkbox; the check is a solid blue block, not a tick. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  /** Renders a blue bar for partial selection (table header select-all). */
  indeterminate?: boolean;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
