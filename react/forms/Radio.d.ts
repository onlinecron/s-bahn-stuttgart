import * as React from 'react';
/** Single-choice control: square box, round blue core. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  name: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;
